


export async function fetchPets() {
    const response = await fetch('/api/obterPets', {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      },
      method: 'POST'
    });
    const data = await response.json();
    console.log(data);
    return data.rows;
}