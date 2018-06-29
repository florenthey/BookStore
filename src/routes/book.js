import express from 'express'
import { Book } from '../models/book'
import multer from 'multer'
import path from 'path'

const appbook = express.Router()

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() +"-"+ file.originalname)
    }
})

var upload = multer({ storage: storage }).single("img")


appbook.get("/", (req, res) => {
    Book.find({}, (err, books) => {
        if(err) console.log(err)
        res.render('book', {
            books: books
        })
    })
})

appbook.get('/add', (req, res) => {
    res.render('book_add')
})


appbook.post('/add', upload, (req, res) => {
    const datas = req.body
    datas['img'] = req.file.filename
    console.log(req.body)
    const books = new Book(datas)
    books.save((err, books) => {
        if (err) console.log(err)
        res.redirect("/")
    })
})

appbook.get("/edit/:id", (req, res) => {
    Book.findById(req.params.id, (err, singleBook) => {
        if(err) console.log(err)
        res.render("book_edit", {
            pugSingleBook: singleBook
        })
    })
})

appbook.post("/edit/:id", (req, res) => {
    let idParams = { _id: req.params.id }
    Book.update(idParams, req.body, err => {
        if(err) console.log(err)
        res.redirect("/book")
    })
})

appbook.get("/:id", (req, res) => {
    Book.findById( req.params.id, (err, singleBook) => {
        if(err) console.log(err)
        res.render("single_book", {
            pugSingleBook: singleBook
        })
    })
})

export { appbook }