const mongoose=require('mongoose')
const url=process.env.URL;
const connect=()=>{
    mongoose.connect(url).then(()=>{
        console.log("Database Connected");
    })
}

module.exports=connect;