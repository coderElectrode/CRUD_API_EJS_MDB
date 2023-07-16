const express=require('express');
const app=express();
const {getAllPersons_list ,createPerson,updatePerson,deletePerson}=require('./Controller/personController')
app.use(express.json())

app.post('/person', createPerson);
app.get('/list',getAllPersons_list);
app.post('/update',updatePerson );
app.post('/delete',deletePerson)

module.exports=app;