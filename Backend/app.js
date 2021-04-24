const express = require('express')
// const cors = require('cors')
const mongoose = require('mongoose')
const { cloudinary } = require('./utils/cloudinary')
require('dotenv').config()


const app = express()


app.use(express.json({ limit: '50mb' }))
// app.use(cors())

const uri = process.env.ATLAS_URI

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const connection = mongoose.connection
connection.once('open', () => {
    console.log(`Connection with database has been established successfully`)
})

const Schema = mongoose.Schema


const imagesSchema = new Schema({
    id: String,
    description: String,
    date: String,
    image: {type: String, required: true},
    Name: String
})

const Image = mongoose.model('Image', imagesSchema)

let images = []

app.get('/getimages', (req, res) => {
    Image.find((err, foundList) => {
        // console.log(foundList)
        images = foundList
    })
    .then((result) => res.json(result))
    .catch(error => console.error(error))
    // console.log(images)
    // res.send('somehthing new')
})

app.post('/api/upload', async (req, res) => {

    const fileStr = req.body.data
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: 'dev_setups',
        folder: 'dev_setups'
    })
    const urlForUpload = uploadedResponse.secure_url
    const public_id = uploadedResponse.public_id
    console.log(`public id ${public_id} filename is: ${urlForUpload}`)

    const newImage = new Image({
        id: public_id,
        image: urlForUpload
    })

    newImage.save()
})

app.post('/add', (req, res) => {
    const id = req.body.id
    const description = req.body.description
    const image = req.body.image
    const Name = req.body.Name
    const date = req.body.date
    
    const newImage = new Image({
        id: id,
        description: description,
        date: date,
        image: image,
        Name: Name
    })
    
    newImage.save()
    .then(() => res.json('Exercise is added'))
    .catch(err => res.status(400).json(`Error ${err}`))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server has successfully started on Port ${PORT}`)
})