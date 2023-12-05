import { NextResponse } from "next/server";
import client from "../database";

export async function POST(request) {
    // Verifica se as credenciais são do mesmo domínio
    if (request.credentials !== "same-origin") {
        return NextResponse.json({ message: "Não Autorizado!", success: 0 }, { status: 403 });
    }

    // Obtém os dados do corpo da requisição
    const data = await request.json();
    const { id, titulo, conteudo, dataPublicacao, imagem } = data;

    try {
        if (id) {
            // Atualiza a notícia existente
            const result = await client.query("UPDATE noticias SET titulo = $1, conteudo = $2, data = $3, imagem = $4 WHERE id = $5", [titulo, conteudo, dataPublicacao, imagem, id]);

            // Verifica se alguma linha foi realmente atualizada
            if (result.rowCount === 0) {
                return NextResponse.json({ message: "Notícia não encontrada para atualização!", success: 0 }, { status: 404 });
            }

            return NextResponse.json({ message: "Notícia atualizada com sucesso!", success: 1 }, { status: 200 });
        } else {
            // Insere uma nova notícia
            await client.query("INSERT INTO noticias (titulo, conteudo, data, imagem) VALUES ($1, $2, $3, $4)", [titulo, conteudo, dataPublicacao, imagem]);
            return NextResponse.json({ message: "Notícia adicionada com sucesso!", success: 1 }, { status: 201 });
        }
    } catch (error) {
        // Trata possíveis erros
        console.error(error);
        return NextResponse.json({ message: "Erro ao processar a requisição.", success: 0 }, { status: 500 });
    }
}