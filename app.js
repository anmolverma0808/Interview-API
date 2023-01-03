require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()

// db
const connectDB = require('./db/connect')

// Routers
const router = require('./routes/interviews')

// Error Handlers
const notFound = require('./middlewares/not-found')
const errorHandler = require('./middlewares/error-handler')

// Middlewares
app.use(express.json())

// routes
app.use('/api/v1/interviews',router)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 3000

const start = async () => {
    try{
        await connectDB(process.env.DB_STRING)
        app.listen(port,()=>
            console.log(`Server is listening on port ${port}...`)
        )
    }catch(error){
        console.log(error)
    }
}

start()
    
