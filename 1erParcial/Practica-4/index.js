const path = require("path");

//Se llaman las librerías requqeridas para el proyecto
const express = require("express");
const cors =  require("cors");

//Se crea el puerto en donde se va a comunicar localmente
const PUERTO = 8080;

//Las constantes que referenciarán nuestros html para reedirigirnos

const urlIndex = path.join(__dirname,"./index.html")
const urlApostador = path.join(__dirname,"./apostador.html")
const urlPronostico = path.join(__dirname,"./pronostico.html")
const urlEncuentro = path.join(__dirname,"./encuentro_D.html")
const urlError = path.join(__dirname,"./error.html")



const server =  express();

server.use(cors()).use(express.json())

//Creación de los gets


//get que lleva a la página de inicio
server.get('/', functionIndex )

server.get('/index', (req,res)=>{
    res.status(200).sendFile(urlIndex);
    
})

//get que lleva a la página del Apostador
server.get('/apostador', (req,res)=>{
    res.status(200).sendFile(urlApostador);
    
})

//get que lleva a la página del pronóstico deportivo
server.get('/pronostico', (req,res)=>{
    res.status(200).sendFile(urlPronostico);
    
})

//get que lleva a la página del Encuentro deportivo
server.get('/encuentro_D', (req,res)=>{
    res.status(200).sendFile(urlEncuentro);
    
})



function functionIndex (req, res){
    res.status(200).sendFile(urlIndex);
}

//Error por parte del usuario
server.use((req,res, next)=>{
    res.status(400).sendFile(urlError);
})


//Puerto en donde se comunica la página

server.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo http://localhost:${PUERTO}`);
})