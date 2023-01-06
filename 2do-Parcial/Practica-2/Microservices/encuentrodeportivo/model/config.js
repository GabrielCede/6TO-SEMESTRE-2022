const mongoose = require('mongoose');

const database_mongo = async () =>{
    try {
        await mongoose.connect( 'mongodb+srv://localhost:21017',  {
            useNewUrlParser: true,
            useUnifiedTopology: true

        });
        console.log('Base de Datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos')
    }
}


module.exports={
    database_mongo
}