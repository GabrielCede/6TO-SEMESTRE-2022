

//Llamo a la libreria requerida "mongoose" para insertar,eliminar o modificar mis datos
const mongoose = require('mongoose');

//La cadena de caracteres que me permite conectarme a mi nube en el servidor de MongoDB
const connectionURL= "mongodb+srv://EIGI:<eigi1999>@cluster0.yaxkm.mongodb.net/test";



( async ()=>{

    try {
    
        //conectarse a la base de datos
        const stateConnection = await mongoose.connect(connectionURL);

  //##################################################################################################  

        //Defino mis entidades

 //####################################################################################################

        //Un apostador puede hacer muchos pronósticos

        const apostador = mongoose.model("Apostador", 
        {
            nombre:String, identificacion: Int16Array,
            idpronostico: { type: mongoose.Types.ObjectId , ref:"pronostico" }

        });

        // Un pronóstico esta vinculado a un apostador y un encuentro deportivo

        const pronostico = mongoose.model("Pronostico", 
        {
            resultado_propuesto:String,
            valor_apuesta:String,
            idapostador: { type: mongoose.Types.ObjectId , ref:"apostador" },
            idencuentro_D: { type: mongoose.Types.ObjectId , ref:"encuentro_D" }
        });


        //Un encuentro deportivo puede ser pronósticado varias veces

        const encuentro_D = mongoose.model("Encuentro Deportivo", 
        {
            nombre:String,
            nombre_Eq1:String,
            nombre_Eq2:String,
            idpronostico: { type: mongoose.Types.ObjectId , ref:"pronostico" }

        });

    //#########################################################################################################

    //Creación de datos

    //##########################################################################################################

//#region
        //Crear mis usuarios apostadores
        
        //A_1
        const apostador1=  new apostador(
            {
                nombre:"Edison Aguirre",
                indent:0958564367
               
            }
            );
            //Guardo el usuario
        const apostador1Save=  await apostador1.save();

        //A_2
        const apostador2=  new apostador(
            {
                nombre:"Carlos Palma",
                indent:0958564485
               
            }
            );
            //Guardo el usuario
        const apostador2Save=  await apostador2.save();

        //A_3
        const apostador3=  new apostador(
            {
                nombre:"karla Cedeño",
                indent:0958564123
               
            }
            );
            //Guardo el usuario
        const apostador3Save=  await apostador3.save();

        //A_4
        const apostador4=  new apostador(
            {
                nombre:"Gabriel Cedeño",
                indent:0958156947
               
            }
            );
            //Guardo el usuario
        const apostador4Save=  await apostador4.save();

        //A_5
        const apostador5=  new apostador(
            {
                nombre:"Anette Moreno",
                indent:0958156741
               
            }
            );
            //Guardo el usuario
        const apostador5Save=  await apostador5.save();
    //#########################################################

        //Datos de los encuentros deportivos
            
        //Encuentro 1

        const encuentro_D1=  new encuentro_D(
            {
                resultado_propuesto:"Pasto de Grama 2 Goles - Real Furcia 1 Gol ",
                valor_apuesta:"20.00$"
                         
            }
            );
            //Guardar el encuentro
        const encuentro_D1Save=  await encuentro_D1.save();

        //Encuentro 2

        const encuentro_D2=  new encuentro_D(
            {
                resultado_propuesto:"Minabo de Kiev 0 Goles - Vodka Juniors 1 Gol ",
                valor_apuesta:"10.00$"
                         
            }
            );
            //Guardar el encuentro
        const encuentro_D2Save=  await encuentro_D2.save();

        //Encuentro 3

        const encuentro_D3=  new encuentro_D(
            {
                resultado_propuesto:"Aston Birra 1 Gol - Yayo Vallecano 1 Gol ",
                valor_apuesta:"30.00$"
                         
            }
            );
            //Guardar el encuentro
        const encuentro_D23ave=  await encuentro_D3.save();
        



        //#endregion

    } catch (error) {
        console.log(error.message);       
    }
});
        



        

   