require('dotenv').config();
require('./db/WeTechDB')
const express=require('express');
const cors = require('cors');
const authRouter = require('./routers/auth');
const usersRouter = require('./routers/user-route');
const postsRouter = require('./routers/posts-route');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth',authRouter)
app.use('/users',usersRouter)
app.use('/posts',postsRouter)


app.use('/',(req,res)=>{
    res.send("first page")
})

app.listen(process.env.PORT);