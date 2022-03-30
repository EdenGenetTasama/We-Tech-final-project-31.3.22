require('dotenv').config();
require('./db/WeTechDB')
const express=require('express');
const cors = require('cors');
const authRouter = require('./routers/auth');
const usersRouter = require('./routers/user-route');
const postsRouter = require('./routers/posts-route');
const multer = require("multer");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/images", express.static(path.join(__dirname, "/public/images")));
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null , "/server/public/images")
    },
    filename:(req,file,cb)=>{
        cb(null, file.originalname )
    },
})
const upload = multer({storage});

app.post("/server/upload",upload.single("file"),(req,res)=>{
try{
    return res.status(200).json("File uploaded successfully")
}
catch(err){
console.log(err)
}
})

app.use('/auth',authRouter)
app.use('/users',usersRouter)
app.use('/posts',postsRouter)



// app.use('/',(req,res)=>{
//     res.send("first page")
// })



app.listen(process.env.PORT);

if (process.env.NODE_ENV === 'production') {
     app.use(express.static(path.join(__dirname, '../client/build')));
     app.get('*', (req, res)=>{
     res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
     });
     }