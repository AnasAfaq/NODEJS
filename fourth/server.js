const express = require('express');
const app = express();
const db = require('./db');

const person = require('.models/person');

app.get('/',function (req,res){
    res.send('Welcome to my hotel... How I can help you ? we have list of menus');
})

app.post('/person',async (req,res)=>{
    try{
    const data = req.body;

    const newPerson = new person(data);

    const response = newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
}
catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
}
});

app.listen(3000,()=>{
    console.log('listening on port 3000');
})