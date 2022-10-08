//Datos del Apostador

const apostadors =[
    {
        id:1,
        nombre:"Edison Aguirre",
        indent:0958564367,
        
    },
    {
        id:2,
        nombre:"Carlos Palma",
        indent:0958564485,
        
    },
    {
        id:3,
        nombre:"karla Cedeño",
        indent:0958564123,
        
    },
    {
        id:4 ,
        nombre:"Gabriel Cedeño",
        indent:0958156947,
        
    },
    {
        id:5 ,
        nombre:"Anette Moreno",
        indent:0958156741,
        
    },
]

//Información sobre el pronóstico deportivo

const pronosticos =[

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
//Información de los equipos deportivos
const encuentro_D =[

    {
        id:1,
        nombre_Eq1:"Minabo de Kiev",
        nombre_Eq2:"Vodka Juniors",
        fecha:"20/09/2022",
        hora:"3:00 PM",
        id_encuentro_D:1
    },
    {
        id:2,
        nombre_Eq3:"Aston Birra",
        nombre_Eq4:"Yayo Vallecano",
        fecha:"23/09/2022",
        hora:"6:00 PM",
        id_encuentro_D:2
    },
    {
        id:3,
        nombre_Eq3:"Pasto de Grama",
        nombre_Eq4:"Real Furcia",
        fecha:"27/09/2022",
        hora:"3:00 PM",
        id_encuentro_D:3
    },

]

// Función async que se encarga de buscar el pronóstico deportivo de la apuesta por el id asignado.

async function findApuestaForId(id){
    const pronostico = pronosticos.find((pronostico)=> pronostico.id===id );
    if (!pronostico)
    {
        const error =  new Error();
        error.message="No encontramos el pronóstico deportivo";
        throw error;
    }
    return pronostico;

}


//Función async que se encarga de buscar el apostador por el id asignado.

async function findApostadorForId(id){
    const apostador =  apostadors.find((apostador)=>{
        return apostador.id===id;
    });
    if (!apostador)
    {
        const error = new Error();
        error.message="No encontramos el apostador";
        throw error;
    }
    return apostador;
}



(async ()=>{
    try
    {
        const pronostico  =   await findApuestaForId(3);
        const apostador =   await  findApostadorForId(pronostico.id_apostador);
        pronostico.apostador = apostador;
        console.log(pronostico)
    }
    catch (err)
    {
        console.log(err.message)
    }
}
)();
