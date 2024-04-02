const express = require('express')
const mongoose = require('mongoose')
const taskRoutes = require("./routes/taskRoutes")
const cors =require('cors')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://prabhatproffesion:prk5tbOW5AtDW9Ij@cluster0.xpyj0cq.mongodb.net/')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.use("/task",taskRoutes)
app.get('/',(req,res)=>{
  app.use(express.static(path.resolve(__dirname, 'frontend','dist')))
  res.sendFile(path.resolve(__dirname, 'frontend',"dist",'index.html'))
})

const port = 10000 

app.listen(port || 3000,()=>{
    console.log('listening on port 3000')
})