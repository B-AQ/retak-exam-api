const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8000;

const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGO_URL}/exam`, { useNewUrlParser: true , useunifiedtopology: true});
const {getApi,addFav,getFav,deleteFav,updateFav} =require('./controller/crypto.js')

app.get('/', (req,res)=>{
    res.send('hi back')
})

app.get('/api',getApi);
app.post('/add',addFav);
app.get('/fav',getFav);
app.delete('/delete/:id',deleteFav);
app.put('/update/:id',updateFav);


app.listen(PORT, ()=>{
    console.log(`Listening to the server on http://localhost:${PORT}`);})

