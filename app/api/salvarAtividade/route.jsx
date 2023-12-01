import { NextResponse } from "next/server";
import client from "../database";

export async function POST(request) {
    // Verifica se as credenciais são do mesmo domínio
    if (request.credentials !== "same-origin") {
        return NextResponse.json({ message: "Não Autorizado!", success: 0 }, { status: 403 });
    }

    // Obtém os dados do corpo da requisição
    const data = await request.json();
    const { id, nome, descricao, date } = data;

    try {
        if (id) {
            // Atualiza a atividade existente
            const result = await client.query("UPDATE atividades SET nome = $1, descricao = $2, data = $3 WHERE id = $4", [nome, descricao, date, id]);

            // Verifica se alguma linha foi realmente atualizada
            if (result.rowCount === 0) {
                return NextResponse.json({ message: "Atividade não encontrada para atualização!", success: 0 }, { status: 404 });
            }

            return NextResponse.json({ message: "Atividade atualizada com sucesso!", success: 1 }, { status: 200 });
        } else {
            // Insere uma nova atividade
            await client.query("INSERT INTO atividades (nome, descricao, data) VALUES ($1, $2, $3)", [nome, descricao, date]);
            return NextResponse.json({ message: "Atividade adicionada com sucesso!", success: 1 }, { status: 201 });
        }
    } catch (error) {
        // Trata possíveis erros
        console.error(error);
        return NextResponse.json({ message: "Erro ao processar a requisição.", success: 0 }, { status: 500 });
    }
}
