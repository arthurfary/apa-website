import { NextResponse } from "next/server";

import client from "../database";

export async function GET(request) {

    if (request.credentials !== "same-origin") {
        return NextResponse.json({message: "Não Autorizado!"},{ status: 403 });
    }

    // pega parametros
    const parameters = request.nextUrl.searchParams;

    let token = parameters.get('token')
    let nome = parameters.get('nome')

    if (!isUUID(token)) {
        return NextResponse.json({message: "Não Autorizado!"},{ status: 401 });
    }

    if (token == "undefined" || nome == "undefined"){
        return NextResponse.json({message: "Não Autorizado!"},{ status: 401 });
    }

    const { rows } = await client.query("SELECT id FROM usuarios WHERE token = $1 and nome = $2", [token,nome]);

    if (rows == ''){
        return NextResponse.json({message: "Não Autorizado!"},{ status: 401 });
    }

    return NextResponse.json({message: "Logado com sucesso!"}, { status: 200 });
}

function isUUID(str) {
    const uuidPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    return uuidPattern.test(str);
}