import mongoose from 'mongoose'

const Schema = mongoose.Schema

const BookSchema = new Schema({
    title: { type: String },
    author: { type: String, index: true },
    years: { type: Date, index: true, default: Date.now() },
    description: { type: String },
    img: { type: String},
})

const Book = mongoose.model("Book", BookSchema)

export { Book }