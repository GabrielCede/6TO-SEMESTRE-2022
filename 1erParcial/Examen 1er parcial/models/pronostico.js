//ID, ID Apostador, ID Encuento Deportivo, Resultado propuesto, Valor Apuesta

const { model, Schema } = require('mongoose');

const PronosticoSchema = Schema(
    {
        resultado_propuesto:{
            type: String,
            required: [ true, 'Se requiere el ingreso de un pronóstico'],
            unique:true
        },
        valor_apuesta:{
            type: String,
            required: [ true, 'Se requiere un monto a apostar'],
            unique:true
        },
        apostador: {
            type: Schema.Types.ObjectId,
            ref:'Apostador',
            required:false
        },
        encuentro: {
            type: Schema.Types.ObjectId,
            ref:'Encuentro',
            required:false
        }
        
    }
);

PronosticoSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Pronostico', PronosticoSchema );