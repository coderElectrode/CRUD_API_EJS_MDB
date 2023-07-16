const mongoose=require('mongoose')
 const person=mongoose.Schema({
    name:String,
    email:String,
    age:String
 });

 module.exports=mongoose.model('Person', person);
