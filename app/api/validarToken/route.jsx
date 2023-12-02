import { NextResponse } from "next/server";

import client from "../database";

// This function checks if a given string is a valid UUID.
function isUUID(str) {
    const uuidPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    return uuidPattern.test(str);
}

// API route handler
export default async function POST(req) {

    // Extract parameters from the query strin
    const { token, nome } = req.query;

    // Check if the token and nome are valid
    if (!token || !nome || !isUUID(token)) {
        return NextResponse.status(401).send({ message: "Não Autorizado!" });
    }

    try {
        // Query the database
        const { rows } = await client.query("SELECT id FROM usuarios WHERE token = $1 and nome = $2", [token, nome]);
        
        // Check if any user is found
        if (rows.length === 0) {
            return NextResponse.status(401).send({ message: "Não Autorizado!" });
        }

        // Successful authentication
        return NextResponse.status(200).send({ message: "Logado com sucesso!" });
    } catch (error) {
        // Handle any unexpected errors
        console.error(error);
        return NextResponse.status(500).send({ message: "Internal Server Error" });
    }
}
