const express=require("express");
const connectToDb = require("./config/db");


require("dotenv").config()

const app=express();

const PORT=process.env.PORT || 3000;

connectToDb() //database connection 




app.use(express.json()); 


app.get("/test",(req,res)=>{
    res.status(200).json({msg:"this is test Route"});
})

app.listen(PORT,()=>{
  console.log(`server is started ${PORT}`)
})





