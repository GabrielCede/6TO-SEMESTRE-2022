const { Schema, model } = require("mongoose");




const ApostadorSchema = Schema({
  
    Nombre: {
        type: String,
        required:[true, 'El campo nombre es obligatorio']
    },

    Identificacion: {
        type: String,
        required:[ true, 'El campo Identificacion es obligatorio' ]
    }
})


module.exports= model('Apostador', ApostadorSchema)