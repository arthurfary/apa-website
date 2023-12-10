export async function deletarPonto(id) {
    const response = await fetch(`/api/deletarPonto?id=${id}`, {
        headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
        },
        method: 'DELETE'
    });
    const data = await response.json();
    return data;
}
