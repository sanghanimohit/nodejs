const express = require("express")
const mongoose = require("mongoose");

const userRouter = require("./routes/UserRoutes")

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/DATABASE_NU_NAME")
.then(()=>{
    console.log("mongoDB Connect successfully")
})
.catch((err)=>{
    console.log("mongoDB connection error:" , err)
})

app.use("/users", userRouter)

app.listen(3000 , ()=>{
    console.log("server running on port 3000")
})