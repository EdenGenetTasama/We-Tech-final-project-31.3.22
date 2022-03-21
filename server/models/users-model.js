const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        min:3,
        max:20
    },
    dec:{
        type:String,
        required:false,
    },
    userLastName:{
        type:String,
        // required:true,
        min:3,
        max:20
    },
    birthDate:{
        type:Date,
        // required:true,
        default:new Date(),
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
    city:{
        type:String
    },
    from:{
        type:String
    },
    relationship:{
        type:String
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
    },
    

},
{timestamps:true}
)

module.exports = mongoose.model('User',UserSchema)