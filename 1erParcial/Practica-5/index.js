
// establecer las librerías requeridas
const cors = require("cors");
const express  = require("express");

//inicializamos el express
const app =  express();

//definimos el puerto para levantar el servicio
const PUERTO =  3000;

// usaremos 2 middleware (express.json y cors)

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )

//creamos nuestra entidad
let apostador =[];


//creamos nuestro Get general el cual nos devuelvo la información de los apostadores, sin filtro alguno.
app.get('/', (req,res)=>{
    res.status(200).send(
        apostador
    )
})


//Voy a consultar mi entidad por su número de identificación 

app.get('/:identificacion', (req,res)=>{
    const {identificacion} =  req.params;
    let result = apostador.filter(p => p.identificacion === identificacion);
    if (result.length>0)
    {
        res.status(200).send(result[0]);
    }
    res.status(404).send({
        "message":"No se puede encontrar el elemento con esa identificación!"
    });
})

//Agregar los datos de un apostador nuevo
app.post('/', (req,res)=>{
    const {body} = req;
    
    apostador.push(body);
    res.status(200).send({
        message:"Dato insertado correctamente",
        response: body
    })
})

//Modificar los datos del Apostador registrado 
app.put('/', (req,res)=>{
    const {identificacion, nombre} = req.body;
    
    let apostador =  apostador.filter(p=> p.identificacion === identificacion)[0] || {}

    apostador.nombre = nombre;
    

    res.status(200).send(
        {
            message:"dato modificado correctamente",
            response: apostador
        }
    )

})

//Borrar un apostador registrado

app.delete('/:identificacion', (req,res)=>{
    const {identificacion} =  req.params;
    apostador = apostador.filter(p => p.identificacion !== identificacion);
    res.status(200).send({
        response:"Se eliminó el apostador con éxito!"
    })
})
app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})