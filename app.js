const express=require('express');
const app=express();
const {createPerson}=require('./Controller/personController')
app.use(express.json())

app.post('/person', createPerson);
app.get('/list',list)

module.exports=app;