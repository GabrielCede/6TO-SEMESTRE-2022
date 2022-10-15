

//Llamo a la libreria requerida "mongoose" para insertar,eliminar o modificar mis datos
const mongoose = require('mongoose');

//La cadena de caracteres que me permite conectarme a mi nube en el servidor de MongoDB
const connectionURL= "mongodb+srv://EIGI:7777@cluster0.yaxkm.mongodb.net/test";



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
            fecha:String,
            hora:String,
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
                identificacion:0958564367,
                idpronostico: pronostico1Save._id
               
            }
            );
            //Guardo el usuario
        const apostador1Save=  await apostador1.save();

        //A_2
        const apostador2=  new apostador(
            {
                nombre:"Carlos Palma",
                identificacion:0958564485,
                idpronostico: pronostico2Save._id
               
            }
            );
            //Guardo el usuario
        const apostador2Save=  await apostador2.save();

        //A_3
        const apostador3=  new apostador(
            {
                nombre:"karla Cedeño",
                identificacion:0958564123,
                idpronostico: pronostico3Save._id
               
            }
            );
            //Guardo el usuario
        const apostador3Save=  await apostador3.save();

        //A_4
        const apostador4=  new apostador(
            {
                nombre:"Gabriel Cedeño",
                identificacion:0958156947,
                idpronostico: pronostico4Save._id
               
            }
            );
            //Guardo el usuario
        const apostador4Save=  await apostador4.save();

        //A_5
        const apostador5=  new apostador(
            {
                nombre:"Anette Moreno",
                identificacion:0958156741,
                idpronostico: pronostico5Save._id
               
            }
            );
            //Guardo el usuario
        const apostador5Save=  await apostador5.save();
    //#########################################################

            //Pronostico1
        const pronostico1=  new pronostico(
            {
                resultado_propuesto:"Pasto de Grama 2 Goles - Real Furcia 1 Gol ",
                valor_apuesta:"20.00$",
                idapostador:apostador1Save._id ,
                idencuentro_D:encuentro_D3Save._id
               
            }
            );
            //Guardo el usuario
        const pronostico1Save=  await pronostico1.save();

        
        //Pronostico2
        const pronostico2=  new pronostico(
            {
                resultado_propuesto:"Minabo de Kiev 0 Goles - Vodka Juniors 1 Gol ",
                valor_apuesta:"10.00$",
                idapostador:apostador2Save._id ,
                idencuentro_D:encuentro_D1Save._id
               
            }
            );
            //Guardo el usuario
        const pronostico2Save=  await pronostico2.save();

            //Pronostico3
        const pronostico3=  new pronostico(
            {
                resultado_propuesto:"Aston Birra 1 Gol - Yayo Vallecano 1 Gol ",
                valor_apuesta:"30.00$",
                idapostador:apostador3Save._id ,
                idencuentro_D:encuentro_D2Save._id
               
            }
            );
            //Guardo el usuario
        const pronostico3Save=  await pronostico3.save();

        //Pronostico4
        const pronostico4=  new pronostico(
            {
                resultado_propuesto:"Minabo de Kiev 1 Gol - Vodka Juniors 1 Gol ",
                valor_apuesta:"10.00$",
                idapostador:apostador4Save._id ,
                idencuentro_D:encuentro_D1Save._id
               
            }
            );
            //Guardo el usuario
        const pronostico4Save=  await pronostico4.save();

        //Pronostico5
        const pronostico5=  new pronostico(
            {
                resultado_propuesto:"Pasto de Grama 5 Goles - Real Furcia 0 Gol ",
                valor_apuesta:"50.00$",
                idapostador:apostador5Save._id ,
                idencuentro_D:encuentro_D3Save._id
               
            }
            );
            //Guardo el usuario
        const pronostico5Save=  await pronostico5.save();





    //#########################################################

        //Datos de los encuentros deportivos
            
        //Encuentro 1

        const encuentro_D1=  new encuentro_D(
            {
                nombre_Eq1:"Minabo de Kiev",
                nombre_Eq2:"Vodka Juniors",
                fecha:"20/09/2022",
                hora:"3:00 PM",
                
                         
            }
            );
            //Guardar el encuentro
        const encuentro_D1Save=  await encuentro_D1.save();

        //Encuentro 2

        const encuentro_D2=  new encuentro_D(
            {
                nombre_Eq1:"Aston Birra",
                nombre_Eq2:"Yayo Vallecano",
                fecha:"23/09/2022",
                hora:"6:00 PM"
                         
            }
            );
            //Guardar el encuentro
        const encuentro_D2Save=  await encuentro_D2.save();

        //Encuentro 3

        const encuentro_D3=  new encuentro_D(
            {
                nombre_Eq1:"Pasto de Grama",
                nombre_Eq2:"Real Furcia",
                fecha:"27/09/2022",
                hora:"3:00 PM",
                         
            }
            );
            //Guardar el encuentro
        const encuentro_D3Save=  await encuentro_D3.save();

        
        //Mostrar los datos de los pronósticos
        const pronosticos =   await pronostico.find()
    
                    console.log(pronostico )

        //#endregion

    } catch (error) {
        console.log(error.message);       
    }
});
        



        

   
