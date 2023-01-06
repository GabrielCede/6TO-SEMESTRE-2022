const cors = require("cors");
const express  = require("express");
const  { database_mongo } = require('./model/config')
const Apostador = require('./model/apostador')

const app =  express();
const PUERTO =  3000;

const database = async ()=>{
    await database_mongo();

}
database();

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )


app.get('/api/v2/apostador', async (req,res)=>{

    const data  = await Apostador.find()
    
    res.status(200).send(
        data
    )
})

app.post ('/api/v2/apostador', async (req,res)=>{
    const { Nombre, Identificacion } = req.body;
    const data = new Apostador({ Nombre, Identificacion })
    await data.save();
    res.status(200).send({
        message:"Dato insertado",
        data
    })
})

app.put('/api/v2/apostador/:id', async (req,res)=>{
    const {id} = req.params;
    const {...data} = req.body;

    const datos = await Apostador.findByIdAndUpdate(id,data)
    
    res.status(200).send(
        {
            message:"dato modificado",
            datos
        }
    )

})
app.delete('/api/v2/apostador/:id', async (req,res)=>{
    const {id} =  req.params;
    const data = await Apostador.deleteOne()
    res.status(200).send({
        response:"Se eliminó el apostador con éxito!"
    })
})



app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})