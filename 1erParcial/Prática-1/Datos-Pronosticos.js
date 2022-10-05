
//Datos del Apostador

const apostador =[
    {
        id:1,
        nombre:"Edison Aguirre",
        indent:0958564367
    },
    {
        id:2,
        nombre:"Carlos Palma",
        indent:0958564485
    },
    {
        id:3,
        nombre:"karla Cedeño",
        indent:0958564123
    },
    {
        id:4 ,
        nombre:"Gabriel Cedeño",
        indent:0958156947
    },
    {
        id:5 ,
        nombre:"Anette Moreno",
        indent:0958156741
    },
]

//Información de los equipos deportivos
const encuentro_D =[

    {
        id:1,
        nombre_Eq1:"Minabo de Kiev",
        nombre_Eq2:"Vodka Juniors",
        fecha:"20/09/2022",
        hora:"3:00 PM"
    },
    {
        id:2,
        nombre_Eq3:"Aston Birra",
        nombre_Eq4:"Yayo Vallecano",
        fecha:"23/09/2022",
        hora:"6:00 PM"
    },
    {
        id:3,
        nombre_Eq3:"Pasto de Grama",
        nombre_Eq4:"Real Furcia",
        fecha:"27/09/2022",
        hora:"3:00 PM"
    },

]

//Información sobre el pronóstico deportivo

const pronostico =[

    {
        id:1,
        id_apostador:1,
        id_encuentro_D:3,
        resultado_propuesto:"Pasto de Grama 2 Goles - Real Furcia 1 Gol ",
        valor_apuesta:"20.00$"
    },
    {
        id:2,
        id_apostador:2,
        id_encuentro_D:1,
        resultado_propuesto:"Minabo de Kiev 0 Goles - Vodka Juniors 1 Gol ",
        valor_apuesta:"10.00$"
    },
    {
        id:3,
        id_apostador:3,
        id_encuentro_D:2,
        resultado_propuesto:"Aston Birra 1 Gol - Yayo Vallecano 1 Gol ",
        valor_apuesta:"30.00$"
    },
    {
        id:4,
        id_apostador:4,
        id_encuentro_D:1,
        resultado_propuesto:"Minabo de Kiev 1 Gol - Vodka Juniors 1 Gol ",
        valor_apuesta:"10.00$"
    },
    {
        id:5,
        id_apostador:5,
        id_encuentro_D:3,
        resultado_propuesto:"Pasto de Grama 5 Goles - Real Furcia 0 Gol ",
        valor_apuesta:"50.00$"
    },

]


//Se recorre la lista con el bucle forEach para mostrar los datos de los arreglos...

console.log(" ")
console.log("Datos de los apostadores")
console.log(" ")

apostador.forEach(elemento => {
    console.log( elemento)
    
    
});


//Se recorre la lista con el bucle for para mostrar los datos de los arreglos...

console.log(" ")
console.log("Datos de los encuentros deportivos")
console.log(" ")


for(i=0; i<encuentro_D.length;i++){

    console.log(encuentro_D [i]);
}

//Se recorre la lista con el método map para mostrar los datos de los arreglos...

console.log(" ")
console.log("Datos de los pronósticos deportivos")
console.log(" ")

pronostico.map(function(pronostico){
    console.log(pronostico)
});







