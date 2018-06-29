import express from 'express'
import { User } from '../models/user'
const adminRouter = express.Router()


adminRouter.get('/login', (req,res) => {
    res.render('login')
})


adminRouter.post("/login", (req, res, next) => {
    if(req.body.email &&  req.body.password) {
       User.authenticate(req.body.email, req.body.password, function(err, user) {
           if(err || !user) {
               var err = new Err("Mauvais email ou password")
               err.status(err)
               return next(err)
           } else {
               return res.redirect('/')
           }
       }
    )}
})


adminRouter.get("/register", (req, res) => {
  res.render("register")
})

adminRouter.post("/register", (req, res, next) => {
  const newUser = new User(req.body)
  newUser.save((err, user) => {
      if(err) res.send(err)
      console.log(user)
      return res.redirect('/')
  })
})

export { adminRouter }