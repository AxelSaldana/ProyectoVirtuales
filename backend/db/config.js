const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async ()=>{
    try{
        await mongoose.connect(process.env.DB,{
            /*NOTE: Mongoose 6 doesnt need it*/
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex:true,
            // useFindAndModify:false
        });
        console.log(`DB Connected [${process.env.DB}]`); // just for development
    }catch(err){
        console.log(`DB ERROR: ${err}`);
        throw new Error(`DB ERROR`);
    }
}

module.exports={
    dbConnection
}