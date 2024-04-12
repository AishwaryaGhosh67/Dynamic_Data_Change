const express = require('express')
const {route} = require('express/lib/application')
const Detail = require("../models/Detail")
const Slider =  require("../models/slider")
const Service = require("../models/Service")
const Contect = require("../models/contect")
const Galary = require("../models/galary")

const routes = express.Router()

routes.get("/", async(req,res) => {
    const details = await Detail.findOne({"_id":"6608d6df053012182cc64172"})
    const slides = await Slider.find()
    const services = await Service.find()
    // console.log(details)
    // console.log(Slides)
    res.render("index",{
        details:details,
        slides: slides,
        services:services
    })
})

routes.get("/galary", async(req,res) => {
    const details = await Detail.findOne({"_id":"6608d6df053012182cc64172"})
    const galary = await Galary.find()
    // console.log(details)
    res.render("galary",{
        details:details,
        galary:galary
    })    
})

routes.post("/process-contect-form", async(req,res) => {
    console.log("Form is submitted")
    console.log(req.body)
    //save the data to database
    try{
        const data =await Contect.create(req.body)
        console.log(data)
        res.redirect("/")
        
    }catch(e){
        console.log(e)
        res.redirect("/")
    }

})

module.exports=routes