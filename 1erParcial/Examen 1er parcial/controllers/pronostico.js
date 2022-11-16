const { response } = require('express')
const { Pronostico } = require('../models')

//CREAR UN pronostico
const createPronostico= async (req, res = response)=>{
    const { status, user, ...body } =  req.body;
    
    const existPronostico =  await Pronostico.findOne({name: body.name})

    if (existPronostico)
    {
        return res.status(400).json({
            msg:`El Pronostico ${ existPronostico.nombre } ya está registrado`
        })
    }

    const data = {
        ...body,
        name: body.name
    }

    const pronostico = new Pronostico(data);

    const newPronostico =  await pronostico.save();
    res.status(201).json(newPronostico);
}


//Eliminar UN Pronostico

const deletePronostico= async (req, res = response)=>{
    const {id} = req.params;
    const deletePronostico =  await Pronostico.findByIdAndDelete(id, {status:false}, {new:true} );
    res.json(deletePronostico);
}

module.exports = {
    
    createPronostico,
    deletePronostico
};