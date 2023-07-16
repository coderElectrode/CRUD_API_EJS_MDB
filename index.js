require('dotenv').config();
const app=require('./app');
const connect= require('./DB/dbConnect')
const port=process.env.PORT;

app.listen(port,()=>{
    console.log(`Server Running On port ${port}`)
})
connect();