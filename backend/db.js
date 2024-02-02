const mongoos = require("mongoose")

const mongoURI = "mongodb://localhost:27017/my-note-app"

const connectToMongoose=()=>{
    mongoos.connect(mongoURI,()=>{console.log("----> Connected to Mongoose Successfully  :)")})
}

module.exports=connectToMongoose