const mongoos = require("mongoose")

const notesSchema = new mongoos.Schema({
    user:{
        // This is a type of 'foreign key' in SQL
        type: mongoos.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    tag:{
        type:String
    },
    date:{
        type:Date,
        require:true
    },
})

module.exports = mongoos.model("notes",notesSchema)