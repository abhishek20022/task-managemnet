const express=require("express");


require("dotenv").config()

const app=express();

const PORT=process.env.PORT || 3000;




app.use(express.json()); 








app.get("/test",(req,res)=>{
      res.status(200).json({msg:"this is test Route"});
})

app.listen(PORT,()=>{
    console.log(`server is started ${PORT}`)
})