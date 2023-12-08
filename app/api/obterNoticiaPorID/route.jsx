import { NextResponse } from "next/server";
import client from "../database";

export async function GET(request) {
    // Verifica se as credenciais são do mesmo domínio
    if (request.credentials !== "same-origin") {
        return NextResponse.json({ message: "Não Autorizado!", success: 0 }, { status: 403 });
    }

    try {
        // Cria um objeto URL a partir da URL da requisição
        const url = new URL(request.url);

        // Obtém o ID do pet a partir dos parâmetros da URL
        const id = url.searchParams.get("id");

        // Executa a query para obter as notícias, incluindo a imagem
        const { rows } = await client.query("SELECT id, titulo, conteudo, data, imagem FROM noticias WHERE id = $1 ", [id]);

        // Verifica se existem notícias cadastradas
        if (rows.length === 0) {
            return NextResponse.json({ message: "Notícia não encontrada!", rows, success: 1 }, { status: 200 });
        }

        // Retorna as notícias encontradas
        return NextResponse.json({ rows, success: 1 }, { status: 200 });
    } catch (error) {
        // Trata possíveis erros durante a execução da query
        console.error(error);
        return NextResponse.json({ message: "Erro ao obter as notícias.", success: 0 }, { status: 500 });
    }
}