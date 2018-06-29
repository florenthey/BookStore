require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dotenv_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_volleyball__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_volleyball___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_volleyball__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_book__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_user__ = __webpack_require__(10);







//import multer from 'multer'

const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
const { port, DBUrl } = process.env;

//Config mongoose
__WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.connect(DBUrl);
const db = __WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('[MongoDB] Connected !');
});

//config express/path...
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_5_path___default.a.join(__dirname, '../public')));
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_3_volleyball___default.a);
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.urlencoded({ extended: false }));

//pug
app.set("views", __WEBPACK_IMPORTED_MODULE_5_path___default.a.join(__dirname, "views"));
app.set("view engine", "pug");

//route principal
app.get("/", (req, res) => {
    res.render("home");
});

//router
app.use("/book", __WEBPACK_IMPORTED_MODULE_4__routes_book__["a" /* appbook */]);

app.use("/admin", __WEBPACK_IMPORTED_MODULE_6__routes_user__["a" /* adminRouter */]);

//port
app.listen(port, () => {
    console.log("Le port fonctionne!");
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src"))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("volleyball");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appbook; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_multer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_path__);





const appbook = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

var storage = __WEBPACK_IMPORTED_MODULE_2_multer___default.a.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

var upload = __WEBPACK_IMPORTED_MODULE_2_multer___default()({ storage: storage }).single("img");

appbook.get("/", (req, res) => {
    __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */].find({}, (err, books) => {
        if (err) console.log(err);
        res.render('book', {
            books: books
        });
    });
});

appbook.get('/add', (req, res) => {
    res.render('book_add');
});

appbook.post('/add', upload, (req, res) => {
    const datas = req.body;
    datas['img'] = req.file.filename;
    console.log(req.body);
    const books = new __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */](datas);
    books.save((err, books) => {
        if (err) console.log(err);
        res.redirect("/");
    });
});

appbook.get("/edit/:id", (req, res) => {
    __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */].findById(req.params.id, (err, singleBook) => {
        if (err) console.log(err);
        res.render("book_edit", {
            pugSingleBook: singleBook
        });
    });
});

appbook.post("/edit/:id", (req, res) => {
    let idParams = { _id: req.params.id };
    __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */].update(idParams, req.body, err => {
        if (err) console.log(err);
        res.redirect("/book");
    });
});

appbook.get("/:id", (req, res) => {
    __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */].findById(req.params.id, (err, singleBook) => {
        if (err) console.log(err);
        res.render("single_book", {
            pugSingleBook: singleBook
        });
    });
});



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const BookSchema = new Schema({
    title: { type: String },
    author: { type: String, index: true },
    years: { type: Date, index: true, default: Date.now() },
    description: { type: String },
    img: { type: String }
});

const Book = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model("Book", BookSchema);



/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adminRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(11);


const adminRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

adminRouter.get('/login', (req, res) => {
    res.render('login');
});

adminRouter.post("/login", (req, res, next) => {
    if (req.body.email && req.body.password) {
        __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */].authenticate(req.body.email, req.body.password, function (err, user) {
            if (err || !user) {
                var err = new Err("Mauvais email ou password");
                err.status(err);
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
});

adminRouter.get("/register", (req, res) => {
    res.render("register");
});

adminRouter.post("/register", (req, res, next) => {
    const newUser = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */](req.body);
    newUser.save((err, user) => {
        if (err) res.send(err);
        console.log(user);
        return res.redirect('/');
    });
});



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bcrypt__);



const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const userSchema = new Schema({
    username: { type: String },
    name: { type: String },
    email: { type: String },
    password: { type: String }
});

userSchema.statics.authenticate = function (email, password, cb) {
    User.findOne({ email: email }).exec(function (err, user) {
        if (err) {
            return cb(err);
        } else if (!user) {
            var err = new Err('utilisateur non trouvé');
            error.status = 401;
            return cb(err);
        }
        __WEBPACK_IMPORTED_MODULE_1_bcrypt___default.a.compare(password, user.password, function (err, result) {
            if (result === true) {
                return cb(null, user);
            } else {
                return cb();
            }
        });
    });
};

//Config bcrypt
userSchema.pre('save', function (next) {
    // next = middleware, voir express node
    const user = this; // à chaque instance du model
    __WEBPACK_IMPORTED_MODULE_1_bcrypt___default.a.hash(user.password, 10, function (err, hash) {
        if (err) return next(error);
        user.password = hash;
        next();
    });
});

const User = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model("User", userSchema);



/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map