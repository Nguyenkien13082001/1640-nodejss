require('dotenv').config()
const express = require('express') //common js
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')


//import express from 'express' es js
// console.log('>>>>>check env', process.env)

const app = express() //app express
const port = process.env.PORT || 8888//port
const hostname = process.env.HOST_NAME
//config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//config template engine
configViewEngine(app)


//Khai bao route
app.use('/', webRoutes)

    ; (async () => {
        //test connection
        try {
            await connection()
            app.listen(port, hostname, () => {
                console.log(`Example app listening on port ${port}`)
            })
        } catch (error) {
            console.log(">>Error connection to DB", error)
        }
    })();


// app.listen(port, hostname, () => {
//   console.log(`Example app listening on port ${port}`)
// })


