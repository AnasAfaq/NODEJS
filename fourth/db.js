const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017")
.then(()=>{
    console.log('connected successfully !!!');
})
.catch((err)=>{
    console.log('MongoDB connection error : ',err);
});

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to MongoDB server');
});

db.on('error',(err)=>{
    console.log('MongoDB connection error:',err);
});

db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
});

module.exports = db;