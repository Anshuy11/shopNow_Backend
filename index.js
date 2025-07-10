const bodyParser = require("body-parser");
const express = require("express")
const cors = require("cors")
const AuthRouter= require('./Routes/AuthRouter')

const app = express()
require("dotenv").config();
require("./Models/db")
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
/* To allow client request */
app.use(cors())

app.use('/api/auth',AuthRouter)


app.listen(PORT, () => {
    console.log("hello from server")
})