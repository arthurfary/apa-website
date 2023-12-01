import { NextResponse } from "next/server";
import client from "../database";

export async function DELETE(request) {
    // Verifica se as credenciais são do mesmo domínio
    if (request.credentials !== "same-origin") {
        return NextResponse.json({ message: "Não Autorizado!", success: 0 }, { status: 403 });
    }

    // Cria um objeto URL a partir da URL da requisição
    const url = new URL(request.url);

    // Obtém o ID do pet a partir dos parâmetros da URL
    const id = url.searchParams.get("id");

    if (!id) {
        return NextResponse.json({ message: "ID da notícia não fornecido!", success: 0 }, { status: 400 });
    }

    try {
        // Executa a query de deleção
        const result = await client.query("DELETE FROM noticias WHERE id = $1", [id]);

        // Verifica se alguma linha foi realmente deletada
        if (result.rowCount === 0) {
            return NextResponse.json({ message: "Notícia não encontrada!", success: 0 }, { status: 404 });
        }

        // Retorna sucesso
        return NextResponse.json({ message: "Notícia deletada com sucesso!", success: 1 }, { status: 200 });
    } catch (error) {
        // Trata possíveis erros
        console.error(error);
        return NextResponse.json({ message: "Erro ao deletar a notícia.", success: 0 }, { status: 500 });
    }
}
