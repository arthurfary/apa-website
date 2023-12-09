import { NextResponse } from "next/server";
import client from "../database";

export async function GET(request) {

    // Verifica se as credenciais são do mesmo domínio
    if (request.credentials !== "same-origin") {
        return NextResponse.json({ message: "Não Autorizado!", success: 0 }, { status: 403 });
    }

    try {
        // Executa a query para obter as notícias, incluindo a imagem
        const { rows } = await client.query("SELECT id, titulo, conteudo, data, imagem FROM noticias ORDER BY data DESC");

        // Verifica se existem notícias cadastradas
        if (rows.length === 0) {
            return NextResponse.json({ message: "Não existem notícias cadastradas!", rows, success: 1 }, { status: 200 });
        }

        // Retorna as notícias encontradas
        return NextResponse.json({ rows, success: 1 }, { status: 200 });
    } catch (error) {
        // Trata possíveis erros durante a execução da query
        console.error(error);
        return NextResponse.json({ message: "Erro ao obter as notícias.", success: 0 }, { status: 500 });
    }
}