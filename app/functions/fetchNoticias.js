


export async function fetchNoticias() {
    const response = await fetch('/api/obterNoticias', {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
    const data = await response.json();
    return data.rows;
  }