import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String },
    name: { type: String },
    email: { type: String },
    password: { type: String },
})

userSchema.statics.authenticate = function(email, password, cb){
    User.findOne({email:email})
      .exec(function(err, user){
          if(err) {
              return cb(err)
          } else if(!user){
              var err = new Err('utilisateur non trouvé')
              error.status = 401;
              return cb(err)
          }
          bcrypt.compare(password, user.password, function(err, result) {
              if(result === true) {
                  return cb(null, user)
              } else {
                  return cb()
              }
          })
      })

}

//Config bcrypt
userSchema.pre('save', function(next){ // next = middleware, voir express node
    const user = this // à chaque instance du model
    bcrypt.hash(user.password, 10, function(err, hash){
        if(err) return next(error)
        user.password = hash
        next()
    })
})

const User = mongoose.model("User", userSchema)

export { User }