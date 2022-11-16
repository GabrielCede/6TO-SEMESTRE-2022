const { response } = require('express')
const { Apostador } = require('../models')

//CREAR UN APOSTADOR
const createApostador= async (req, res = response)=>{
    const { status, user, ...body } =  req.body;
    
    const existApostador =  await Apostador.findOne({name: body.name})

    if (existApostador)
    {
        return res.status(400).json({
            msg:`El Apostador ${ existApostador.nombre } ya está registrado`
        })
    }

    const data = {
        ...body,
        name: body.name
    }

    const apostador = new Apostador(data);

    const newApostador =  await apostador.save();
    res.status(201).json(newApostador);
}


//Eliminar UN APOSTADOR

const deleteApostador= async (req, res = response)=>{
    const {id} = req.params;
    const deleteApostador =  await Apostador.findByIdAndDelete(id, {status:false}, {new:true} );
    res.json(deleteApostador);
}

module.exports = {
    
    createApostador,
    deleteApostador
};