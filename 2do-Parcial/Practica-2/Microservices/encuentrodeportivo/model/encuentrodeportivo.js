const { Schema, model } = require("mongoose");




const EncuentrodeportivoSchema = Schema({

    Equipo1: {
        type: String,
        required:[true, 'El campo Equipo1 es obligatorio']
    },
    Equipo2: {
        type: String,
        required:[true, 'El campo Equipo2 es obligatorio']
    },
    Fecha: {
        type: String,
        required:[true, 'El campo Fecha es obligatorio']
    },

    Hora: {
        type: String,
        required:[ true, 'El campo Hora es obligatorio' ]
    }
})


module.exports= model('Encuentrodeportivo', EncuentrodeportivoSchema)