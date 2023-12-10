


export async function fetchPontos() {
    const response = await fetch('/api/obterPontos', {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      },
      method: 'POST'
    });
    const data = await response.json();
    return data.rows;
  }