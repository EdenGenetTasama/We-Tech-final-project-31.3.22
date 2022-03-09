require('./db/WeTechDB')
const express = require('express');
const app = express();
require('dotenv').config();





app.use('/' ,(req,res)=>{
  
})


app.listen(process.env.PORT,(req,res)=>{
    console.log(`Server is up in ${process.env.PORT} `);
});