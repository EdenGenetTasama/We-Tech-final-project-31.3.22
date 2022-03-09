const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        min:3,
        max:20
    },
    userLastName:{
        type:String,
        required:true,
        min:3,
        max:20
    },
    birthDate:{
        type:Date,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        max:50
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    followings:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    }

},
{timestamps:true}
)

module.exports = mongoose.model('User',UserSchema)