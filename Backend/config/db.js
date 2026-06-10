const mongoose=require("mongoose");

const connectToDb= async ()=>{  //connection to database
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Database successfully excuted")

    }catch(err){
        console.log("databse not connect something error",err)
    }

}

module.exports=connectToDb;



