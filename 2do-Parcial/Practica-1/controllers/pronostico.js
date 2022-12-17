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


//Actualizar un Pronóstico
const updatePronostico= async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const updatedPronostico =  await Pronostico.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatePronostico);
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