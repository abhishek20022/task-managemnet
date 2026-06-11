const express=require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectToDb = require("./config/db");



require("dotenv").config()

const userRoutes=require("./routes/user.routes")
const taskRoutes=require("./routes/task.routes")
const adminRoutes=require("./routes/admin.routes")

const app=express();

const PORT=process.env.PORT || 3000;

connectToDb() //database connection 



app.use(cookieParser());
app.use(express.json()); 
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//Routes

app.use("/api/auth",userRoutes)// user routes
app.use("/api/tasks", taskRoutes);//task routes
app.use("/api/admin", adminRoutes);//Admin routes


app.get("/test",(req,res)=>{
    res.status(200).json({msg:"this is test Route"});
})

app.listen(PORT,()=>{
  console.log(`server is started ${PORT}`)
})





