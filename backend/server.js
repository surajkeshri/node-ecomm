const app=require('./app');
const dotenv=require('dotenv');
const connectDatabase = require('./config/database');

//Config

dotenv.config({path:"backend/config/config.env"})
 

//connecting to database
connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`sever is connetced on PORT ${process.env.PORT}`);
})