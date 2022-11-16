//ID, Equipo1, Equipo2, Fecha, Hora

const { model, Schema } = require('mongoose');

const EncuentroSchema = Schema(
    {
        equipo1:{
            type: String,
            required: [ true, 'El nombre del equipo es requerido'],
            unique:true
        },
        equipo2:{
            type: String,
            required: [ true, 'El nombre del equipo es requerido'],
            unique:true
        },
        
        fecha:{
            type: String,
            required: [ true, 'La fecha del encuentro deportivo es requerida'],
            unique:true
        },
        hora:{
            type: String,
            required: [ true, 'La hora del encuentro deportivo es requerida'],
            unique:true
        }
    }
);

EncuentroSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Encuentro', EncuentroSchema );