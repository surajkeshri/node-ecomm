const app=require('./app');
const dotenv=require('dotenv');
const connectDatabase = require('./config/database');

//Config

dotenv.config({path:"backend/config/config.env"})
 

//connecting to database
connectDatabase();

const server=app.listen(process.env.PORT,()=>{
    console.log(`sever is connetced on PORT ${process.env.PORT}`);
})

//uhandled Pormise Rejection
process.on("unhandledRejection",err=>{
    console.log(`Error ${err.message}`)
    console.log('shutting down the server due to some technical issue')
    server.close(()=>{
        process.exit(1)
    })
})