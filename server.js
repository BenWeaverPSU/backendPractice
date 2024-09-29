require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require("cors");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const app = express()

const createToken = (_id) =>{
  jwt.sign({_id}, process.env.SECRET, {expiresIn:'1d'})
}

userSchema = mongoose.Schema
resrvationSchema = mongoose.Schema

const Reservation = new resrvationSchema({
  first: {type: String},
  last: {type: String},
  email: {type: String},
  phone: {type: Number},
  start: {type: Date},
  end: {type: Date},
  cc: {type: Number},
  exp: {type: Date},
  csv: {type: Number},
})

const User = new userSchema({
  email:{type: String, required: true, unique: true},
  password:{type: String, required: true},
  reservation: Reservation
})

const users = mongoose.model('User', User)

const router = express.Router()
app.use(cors())
app.use('/api', router)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

/*app.use((req,res,next) => {
  console.log(req.path, req.method)
  next()
})*/



//gets existing user
app.post('/email', async (req, res) => {
  console.log(req.body)
  //const token = createToken(req.body)
  //const {newEmail, newPassword} = (req.body)

   // console.log({token})
  const user = await users.findOne(req.body)
  console.log(user)
  //const match = bcrypt.compare(req.body)
 // console.log(match)
})

//creates new user
app.post('/', async (req, res) => {
  console.log(req.body)

  // const {newEmail, newPassword} = req.body
    //const salt = await bcrypt.genSalt(10)
    //const hash = await bcrypt.hash(newPassword, salt)
  try{
    //const user = await.users.create({newEmail, password: hash})
    const user = await users.create(req.body)
  }catch(error){
    console.log({error: error.message})
  }

})

//adds reservation collection to user
app.patch('/email', async (req, res) => {

  try{
    const user = await users.create(req.body)
  }catch(error){
    console.log({error: error.message})
  }
  res.json({message:"adds reservation"})
})

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port ", process.env.PORT)
    })
  })
    .catch((error) => {
      console.log({error:error.message})
    })

