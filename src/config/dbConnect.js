import mongoose from "mongoose";

/**
 * Vale lembrar,
 * O Mongo = é o nosso banco
 * O Mongoose = é a nossa biblioteca que faz a nossa interface para utilizar o BD
 * 
 */


async function conectaNaDatabse(){
    
    // Tratar essa informação para subir de forma correta para o github
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    
    return mongoose.connection;
}

export default conectaNaDatabse;
