const mongoose = require("mongoose")

const mongo_url = process.env.MONGODB_URI
mongoose.connect(mongo_url).then(() => {
    console.log("Mongo conected")
}).catch((err)=>console.error(err))