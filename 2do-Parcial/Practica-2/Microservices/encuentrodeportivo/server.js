const cors = require("cors");
const express  = require("express");
const  { database_mongo } = require('./model/config')
const EncuentroDeportivo = require('./model/encuentrodeportivo')

const app =  express();
const PUERTO =  3000;

const database = async ()=>{
    await database_mongo();

}
database();

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )


app.get('/api/v2/encuentrodeportivo', async (req,res)=>{

    const data = await EncuentroDeportivo.find()
    
    res.status(200).send(
        data
    )
})

app.post ('/api/v2/encuentrodeportivo', async (req,res)=>{
    const { Equipo1, Equipo2, Fecha, Hora } = req.body;
    const data = new EncuentroDeportivo({ Equipo1, Equipo2, Fecha, Hora })
    await data.save();
    res.status(200).send({
        message:"Dato insertado ",
        data
    })
})

app.put('/api/v2/encuentrodeportivo/:id', async (req,res)=>{
    const {id} = req.params;
    const {...data} = req.body;

    const datos = await EncuentroDeportivo.findByIdAndUpdate(id,data)
    
    res.status(200).send(
        {
            message:"dato modificado",
            datos
        }
    )

})
app.delete('/api/v2/encuentrodeportivo/:id', async (req,res)=>{
    const {id} =  req.params;
    const data = await EncuentroDeportivo.deleteOne()
    res.status(200).send({
        response:"Se eliminó el encuentrodeportivo con éxito!"
    })
})



app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})