import { NextResponse } from "next/server";
import client from "../database";

export async function POST(request) {
    // Verifica se as credenciais são do mesmo domínio
    if (request.credentials !== "same-origin") {
        return NextResponse.json({ message: "Não Autorizado!", success: 0 }, { status: 403 });
    }

    // Obtém os dados do corpo da requisição
    const data = await request.json();
    const { id, nome, especie, foto } = data;

    try {
        if (id) {
            // Atualiza o pet existente
            const result = await client.query("UPDATE pets SET nome = $1, especie = $2, foto = $3 WHERE id = $4", [nome, especie, foto, id]);

            // Verifica se alguma linha foi realmente atualizada
            if (result.rowCount === 0) {
                return NextResponse.json({ message: "Pet não encontrado para atualização!", success: 0 }, { status: 404 });
            }

            return NextResponse.json({ message: "Pet atualizado com sucesso!", success: 1 }, { status: 200 });
        } else {
            // Insere um novo pet
            await client.query("INSERT INTO pets (nome, especie, foto) VALUES ($1, $2, $3)", [nome, especie, foto]);
            return NextResponse.json({ message: "Pet adicionado com sucesso!", success: 1 }, { status: 201 });
        }
    } catch (error) {
        // Trata possíveis erros
        console.error(error);
        return NextResponse.json({ message: "Erro ao processar a requisição.", success: 0 }, { status: 500 });
    }
}
