const express=require('express');
const app=express();
const createPerson=require('./Controller/createPerson')
app.use(express.json())

app.post('/person', createPerson);

module.exports=app;