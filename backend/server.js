import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbcards.js';
import cors from 'cors';
 
const app=express();
const PORT = process.env.PORT || 8001;

const connection_url = 'mongodb+srv://admin:hZhz1xIxUvwuIp9E@cluster0.ridq2.mongodb.net/dbcard?retryWrites=true&w=majority'

app.use(express.json());
app.use(cors());

mongoose.connect(connection_url,{
  
    useCreateIndex:true,
    useUnifiedTopology:true
})
app.get('/',(req,res) => {
    res.send("hello")
})

app.post('/tinder/card',(req,res) => {
     const dbcard = req.body;

     Cards.create(dbcard,(err,data) => {
         if(err){
             res.status(500).send(err);
         }
         else{
            
             res.status(201).send(data);
         }
     })
})
app.get('/tinder/card',(req,res) => {
   
  Cards.find((err,data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})

app.listen(PORT,(req,res) =>{
   console.log("server is running")
});

//hZhz1xIxUvwuIp9E