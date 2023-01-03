const Interview = require('../models/interview')
const {StatusCodes} = require('http-status-codes')
const {BadRequest,NotFound} = require('../errors')

const getAllInterview = async (req,res) => {
    const interviews = await Interview.find({})

    if(!interviews){
        throw new NotFound('No data exist')
    }

    res.status(StatusCodes.OK).json({interviews, nbHits: interviews.length})
}

const createInterview = async (req,res) => {
    const interview = await Interview.create(req.body)
    res.status(StatusCodes.CREATED).json({interview})
}

const getInterview = async (req,res) => {
    const {id} = req.params
    const interview = await Interview.findOne({_id:id})

    if(!interview){
        throw new NotFound(`No interview exist with id ${id}`)
    }

    res.status(StatusCodes.OK).json({interview})
}

const updateInterview = async (req,res) => {
    const {id} = req.params
    
    const interview = await Interview.findOneAndUpdate({_id:id},req.body,{new:true,runValidators:true})

    if(!interview){
        throw new NotFound(`No interview exist with id ${id}`)
    }

    res.status(StatusCodes.OK).json({interview})
}

const deleteInterviews = async (req,res) => {
    const {id} = req.params

    const interview = await Interview.findOneAndDelete({_id:id})

    if(!interview){
        throw new NotFound(`No interview exist with id ${id}`)
    }

    res.status(StatusCodes.OK).json({sucess:true,msg:'Item has been deleted'})
}

module.exports = {
    getAllInterview,
    createInterview,
    getInterview,
    updateInterview,
    deleteInterviews
}