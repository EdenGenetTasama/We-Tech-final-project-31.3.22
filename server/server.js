<<<<<<< HEAD
require('dotenv').config();


console.log(process.env.AMIR);
=======
require('./db/WeTechDB')
const express = require('express');
const app = express();
require('dotenv').config();





app.use('/' ,()=>{});


app.listen(process.env.PORT,()=>{});
>>>>>>> main
