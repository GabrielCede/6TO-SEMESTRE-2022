const { model, Schema } = require('mongoose');

const ApostadorSchema = Schema(
    {
        nombre:{
            type: String,
            required: [ true, 'El nombre del usuario es necesario'],
            unique:true
        },
        identificacion:{
            type: String,
            required: [ true, 'Se requiere número de identificacion'],
            unique:true
        }
    }
);

ApostadorSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Apostador', ApostadorSchema );