const mongoos = require("mongoose")

const userSchema = new mongoos.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now(),
        require:true
    },
})
const User = mongoos.model("user",userSchema)
User.createIndexes()

module.exports = User
