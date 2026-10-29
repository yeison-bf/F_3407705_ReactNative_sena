// let client = {
//     name: "Juan",
//     lastname: "Castro",
//     status: true
// }

// console.log(client)


// localStorage.setItem("datosClients", JSON.stringify(client))

// let dataStorage = localStorage.getItem("datosClients") || [] 
// console.log(JSON.parse(dataStorage))









const x = async () => {
    let edad = 55;
    let nombre =  "Juana"
    let rkm = await axios.get("http://rkm/api/225")
    
    console.log(edad)
    console.log(nombre)
    console.log(rkm)
}












