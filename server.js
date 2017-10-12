//imports variables from .env file
require('dotenv').config()
const express =  require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const UsersController = require('./routes/UsersController')
mongoose.Promise = global.Promise

//create a new app using express
const app = express()

//connect to mongodb and set up messages for when 
//mongo connects or encounters an error
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('connected to mongodb')
})
connection.on('error', (error) => {
    console.log('error connecting to mongodb', error)
})

//inject middleware
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/client.build`))
app.use('/api/users', UsersController)


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log("listening on ", PORT)
})