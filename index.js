import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import db from './src/models/index.js'
dotenv.config()

const app = express() // initializes express

// create .env variable
const port = process.env.PORT || 3000

// using sequelize ORM to create tables
db.sequelize.sync()

// create server 
// our app listen on http:localhost:3000
app.listen(port, () =>{
    console.log('listening onn port ' + 3000);
})
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(cors())

app.get('/', (_req, res) =>{
    res.json("api is working")
})
