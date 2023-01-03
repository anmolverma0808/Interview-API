const mongoose = require('mongoose')

const InterviewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide name'],
        maxLength:20,
        immutable: true
    },
    company:{
        type:String,
        required:[true,'Please provide company name'],
        maxLength:50,
        immutable: true
    },
    position:{
        type:String,
        required:[true,'Please provide position'],
        maxLength:100,
        immutable: true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    duration:{
        type:String,
        default: '60 mins'
    },
    status:{
        type:String,
        enum:{
            values:['pending','selected','not-selected'],
            message:'{VALUE} is not supported'
        },
        default:'pending'
    }
})

module.exports = mongoose.model('Interview',InterviewSchema)