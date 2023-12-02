import { NextResponse } from 'next/server';
import client from '../database';

export async function POST(request) {
    // Ensure the request is of same origin for security
    if (request.credentials !== 'same-origin') {
        return NextResponse.json({ message: 'Não Autorizado!' }, { status: 403 });
    }

    // Parse the request body
    const body = await request.json();
    const { nome, senha } = body;

    try {
        // Check credentials
        const { rows } = await client.query(
            'SELECT id, nome FROM usuarios WHERE nome = $1 AND senha = $2',
            [nome, senha]
        );

        if (rows.length === 0) {
            return NextResponse.json({ message: 'Credenciais inválidas!', autorizado: 0 }, { status: 401 });
        }

        // Update token
        await client.query(
            'UPDATE usuarios SET token = uuid_generate_v4() WHERE nome = $1 AND senha = $2',
            [nome, senha]
        );

        // Retrieve updated token
        const { rows: tokenRows } = await client.query(
            'SELECT token FROM usuarios WHERE nome = $1 AND senha = $2',
            [nome, senha]
        );

        return NextResponse.json({
            message: 'Logado com sucesso!',
            user_data: rows[0],
            autorizado: 1,
            token: tokenRows[0].token
        }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
