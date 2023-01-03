const express = require('express')
const router = express.Router()

const {
    getAllInterview,
    createInterview,
    getInterview,
    updateInterview,
    deleteInterviews
} = require('../controllers/interviews')

router.route('/').get(getAllInterview).post(createInterview)
router.route('/:id').get(getInterview).patch(updateInterview).delete(deleteInterviews)

module.exports = router