async function miFuncion() {
    let response
    response = fetch("https://66279b8eb625bf088c08fd8e.mockapi.io/api/reportes")
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        if (data==="not found"){
            console.log("No se encuentra")
        }
        else{
            console.log("error")
        }

    })
}
miFuncion()