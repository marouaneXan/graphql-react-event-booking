const mongoose=require('mongoose')

const EventSchema=new mongoose.Schema({
    name:{
        type:String,
        required:['Please add a name field']
    }
})

module.exports=mongoose.model('Event',EventSchema)