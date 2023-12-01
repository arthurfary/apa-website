import { NextResponse } from "next/server";

import client from "../database";

export async function POST(request) {

    if (request.credentials !== "same-origin") {
        return NextResponse.json({message: "Não Autorizado!"},{ status: 403 });
    }

    const body = await request.json()

    let nome = body.nome
    let senha = body.senha

    const { rows } = await client.query("SELECT id,nome FROM usuarios WHERE nome = $1 AND senha = $2", [nome, senha]);

    if (rows == '') {
        return NextResponse.json({message: "Credenciais inválidas!", autorizado: 0},{ status: 401 });
    }

    const { res } = await client.query("UPDATE usuarios SET token = uuid_generate_v4() WHERE nome = $1 AND senha = $2", [nome, senha]);
    const { rows: token } = await client.query("SELECT token FROM usuarios WHERE nome = $1 AND senha = $2", [nome, senha]);

    return NextResponse.json({message: "Logado com sucesso!",user_data: rows[0], autorizado: 1, token: token[0].token}, { status: 200 });
}