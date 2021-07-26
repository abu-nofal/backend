'use strict'
const express=require('express')
const cors=require('cors')
const mongoose =require('mongoose')
const digimonData =require('./controllers/digimon.controller')
const {getFav,createFav,deleteFav,updateFav} =require('./controllers/fav.controller')
require('dotenv').config()
const app=express();
app.use(cors())
app.use(express.json())
const PORT=process.env.PORT


mongoose.connect("mongodb://localhost:27017/oooh", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/',(req,res)=>{
    res.send('hello world')
})




app.get('/api',digimonData)


// for favorite 

app.get('/fav',getFav)
app.post('/fav',createFav)
app.delete('/fav/:id',deleteFav)
app.put('/fav/:id',updateFav)






app.listen(PORT,()=>{
    console.log(`port is ${PORT}`)
})