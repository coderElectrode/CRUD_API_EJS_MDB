const person= require('../DB/schema')

const createPerson=(req, res)=>{
    const data=req.body;
    person.findOne({email:data.email}).then((resData)=>{
        if(resData){
            res.send({status:"Field",Message:"Person info Already exist in Database"})
        }
        else{
            const Person=new person(data);
            Person.save().then(()=>{
                res.send({status:"Sucessful",Message:"Person info added in Database"})
            })

        }
    })
   
    

}

module.exports=createPerson;