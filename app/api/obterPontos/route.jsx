import { NextResponse } from "next/server";
import client from "../database";

export async function POST(request) {
    // Verifica se as credenciais são do mesmo domínio
    if (request.credentials !== "same-origin") {
        return NextResponse.json({ message: "Não Autorizado!", success: 0 }, { status: 403 });
    }

    try {
        // Executa a query para obter as atividades
        const { rows } = await client.query("SELECT id, nome, rua, numero, cidade, estado, cep FROM pontos");

        // Verifica se existem atividades cadastradas
        if (rows.length === 0) {
            return NextResponse.json({ message: "Não existem pontos cadastrados!", rows, success: 1 }, { status: 200 });
        }

        // Retorna as atividades encontradas
        return NextResponse.json({ rows, success: 1 }, { status: 200 });
    } catch (error) {
        // Trata possíveis erros durante a execução da query
        console.error(error);
        return NextResponse.json({ message: "Erro ao obter os pontos.", success: 0 }, { status: 500 });
    }
}