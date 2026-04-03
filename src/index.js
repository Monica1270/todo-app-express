import express, { request, response } from 'express';
const arrayTareas = [
    {
        id: 1,
        titulo: "comprar verduras",
        estaCompleta: true,
        fecha: "03/04/2026",
    }
]

//crear servidor 
const servidorExpres = express()
// EL PUERTO  es el lugar donde va a escuchar
const PUERTO = 3000
//eN ESTE momento esta escuchando el servidor
servidorExpres.listen(PUERTO, () => {
    console.log("El servidor de Express esta escuchando el puerto", PUERTO)
})

servidorExpres.get("/", (request, response) => {
    console.log("El servidor Express recibio un GET en la direccion /")
    response.json({
        respuesta: "ok"
    })
})

servidorExpres.get("/api/tareas", (request, response) => {
    console.log("El servidor Express recibioo un get en Mostrar que se esta en la ruta/api/tareas")
    response.json({
        respuesta: arrayTareas
    })
})
