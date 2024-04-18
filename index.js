require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')

const tfServer = express()

tfServer.use(cors())
tfServer.use(express.json())
tfServer.use(router)

const PORT = 3000 || process.env.PORT

tfServer.listen(PORT,()=>{
    console.log(`testserver started at PORT:${PORT}`);
})


tfServer.get("/",(req,res)=>{
    res.status(200).send(`<h1>test fair server started and waiting for client request !!</h1>`)
})
