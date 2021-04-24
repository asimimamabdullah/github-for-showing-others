const mongoose = require('mongoose')

const Schema = mongoose.Schema

const GalleryImagesSchema = new Schema({
    id: Number,
    name: String,
    image: String,
    date: Date,
    description: String
})

const GalleryImage = mongoose.model( 'GalleryImage' , GalleryImagesSchema )

module.exports = GalleryImage


const SliderImagesSchema = new Schema({
    id: Number,
    name: String,
    imageText: String,
    image: String,
    date: new Date(),
    description: String
})

const SliderImage = mongoose.model('SliderImage', SliderImagesSchema)

module.exports = SliderImage


const BooksImagesSchema = new Schema({
    id: Number,
    bookName: String,
    title: String,
    description: String,
    writer: String,
    written: String,
    image: String,
    date: new Date(),

})

const SliderImage = mongoose.model('SliderImage', SliderImagesSchema)

module.exports = SliderImage


