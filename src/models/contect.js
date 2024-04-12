const mongoose = require("mongoose")
const Contect = mongoose.Schema({
    email:String,
    phone:String,
    query:String
})

module.exports = mongoose.model("queries", Contect)