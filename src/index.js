import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import volleyball from 'volleyball'
import { appbook } from './routes/book'
import path from 'path'
import { adminRouter } from './routes/user'
//import multer from 'multer'

const app = express()
const { port, DBUrl } = process.env;

//Config mongoose
mongoose.connect(DBUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('[MongoDB] Connected !')
});

//config express/path...
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json());
app.use(volleyball);
app.use(express.urlencoded({extended : false}));

//pug
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

//route principal
app.get("/", (req, res) => {
    res.render("home")
})

//router
app.use("/book", appbook)


app.use("/admin", adminRouter )


//port
app.listen( port, () => {
    console.log("Le port fonctionne!")
})