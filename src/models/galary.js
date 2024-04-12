
const mongoose = require("mongoose")
const Galary = mongoose.Schema({
    imgName: String,
    imgUrl: String
})

module.exports = mongoose.model("galary", Galary)