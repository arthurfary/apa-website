


export async function removeNoticia(id){
    const response = await fetch('/api/deletarNoticia?id=' + id, {
        method: 'DELETE',
    })

    return response.json().success

}