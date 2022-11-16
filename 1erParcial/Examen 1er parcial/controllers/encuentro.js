const { response } = require('express')
const { Encuentro } = require('../models')

//CREAR UN Encuentro
const createEncuentro= async (req, res = response)=>{
    const { status, user, ...body } =  req.body;
    
    const existEncuentro =  await Encuentro.findOne({name: body.name})

    if (existEncuentro)
    {
        return res.status(400).json({
            msg:`El Encuentro deportivo ${ existEncuentro.nombre } ya está registrado`
        })
    }

    const data = {
        ...body,
        name: body.name
    }

    const encuentro = new Encuentro(data);

    const newEncuentro =  await encuentro.save();
    res.status(201).json(newEncuentro);
}


//Eliminar UN encuentro

const deleteEncuentro= async (req, res = response)=>{
    const {id} = req.params;
    const deleteEncuentro =  await Encuentro.findByIdAndDelete(id, {status:false}, {new:true} );
    res.json(deleteEncuentro);
}

module.exports = {
    
    createEncuentro,
    deleteEncuentro
};