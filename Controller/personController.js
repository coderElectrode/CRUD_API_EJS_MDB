const { json } = require('express');
const person = require('../DB/schema')

const createPerson = (req, res) => {
    const data = req.body;
    person.findOne({ email: data.email }).then((resData) => {
        if (resData) {
            res.send({ status: "Field", Message: "Person info Already exist in Database" })
        }
        else {
            const Person = new person(data);
            Person.save().then(() => {
                res.send({ status: "Sucessful", Message: "Person info added in Database" })
            })

        }
    })
}

const getAllPersons_list = async (req, res) => {
    try {
        const allPersons = await person.find({});
        res.status(200).json(allPersons)

    } catch (err) {
        res.json(err);
    }
}


const updatePerson = (req, res) => {
    var data = req.body;
    var data = { name: req.body.name, age: req.body.age }
    var query = { email: req.body.email };

    const update = person.updateOne(query, data).then(result => {
        if (result.modifiedCount == 0) {
            res.send({ 
                status:"Failed",
                Message: "Person data Not found in DB" })
        }
        else{
            res.send({ status:"Success",
            Message:"Person data Updated in DB" })
           
        }
    })


}

const deletePerson = (req,res) => {
    person.deleteOne({ email: req.body.email }).then((result) => {
        if (result.deletedCount == 0) {
            res.send({ 
                status:"Failed",
                Message: "Person data Not found in DB" })
        }
        else{
            res.send({ status:"Success",
            Message:"Person data Deleted from DB" })
           
        }

    })
}

module.exports = { createPerson, getAllPersons_list, updatePerson, deletePerson }