export async function salvarPonto(nome, rua, numero, cidade, estado, cep, id = null) {

    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    // Validações
    if (typeof nome !== 'string') {
        throw new Error("O nome deve ser uma string.");
    }
    if (typeof rua !== 'string') {
        throw new Error("A rua deve ser uma string.");
    }
    if (!Number.isInteger(parseInt(numero))) {
        throw new Error("O número deve ser um número inteiro.");
    }
    if (typeof cidade !== 'string') {
        throw new Error("A cidade deve ser uma string.");
    }
    if (typeof estado !== 'string' || estado.length > 2) {
        throw new Error("O estado deve ser uma string com no máximo 2 caracteres.");
    }
    cep = cep.replace(/[-. ]/g, ""); // Remove '-', '.', e ' ' do CEP
    if (!Number.isInteger(parseInt(cep)) || cep.length !== 8) {
        throw new Error("O CEP deve ser um número inteiro de 8 dígitos.");
    }

    const response = await fetch('/api/salvarPonto', {
        headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
        },
        method: 'POST',
        body: JSON.stringify({
            id: id,
            nome: toTitleCase(nome),
            rua: toTitleCase(rua),
            numero: numero,
            cidade: toTitleCase(cidade),
            estado: estado.toUpperCase(),
            cep: cep
        })
    });
    const data = await response.json();
    return data;
}
