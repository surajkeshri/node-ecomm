const express=require('express')
const app=express();
const bodyParser=require('body-parser')
const errorMiddleware=require('./middleware/error')
app.use(bodyParser.json())
//Route import
const product=require('./routes/productRoute');



app.use("/api/v1",product);

//Middleware for Errors
app.use(errorMiddleware)
module.exports=app;