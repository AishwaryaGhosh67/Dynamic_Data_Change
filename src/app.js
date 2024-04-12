require('dotenv').config();
const express = require("express")
const hbs = require("hbs")
const bodyParser = require("body-parser")
const routes = require('./routes/main')
const app = express()
const Detail = require("./models/Detail")
const Slider = require("./models/slider")
const Service = require("./models/Service")
const Galary = require("./models/galary")

const Port = 3000 || process.env.PORT

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/static', express.static("public"))
app.use('/', routes)

// (template engine hbs)
app.set('view engine', 'hbs')
app.set("views", "views")
hbs.registerPartials("views/partials")

//db connection
require('./db/conn')


// Galary.create([
//     {
//         imgName: "Micro Design",
//         imgUrl: "https://unsplash.com/photos/macro-photography-of-black-circuit-board-FO7JIlwjOtU"
//     },
//     {
//         imgName: "Digital World",
//         imgUrl: "https://unsplash.com/photos/teal-led-panel-EUsVwEOsblE"
//     }
// ])


// Service.create([
//     {
//         icon: 'fa-brands fa-docker',
//         title: 'Provide Best Courses',
//         desc: 'We provide courses that help you in learning the best phases of skills.',
//         linkText: '/',
//         link: 'Check'
//     },
//     {
//         icon: 'fa-solid fa-file',
//         title: 'Learn projects',
//         desc: 'We provide courses that help you in learning projects skills.',
//         linkText: '/',
//         link: 'Learn'
//     },
//     {
//         icon: 'fa-solid fa-book',
//         title: 'E-Book Contents',
//         desc: 'We provide courses related book with full contents',
//         linkText: '/',
//         link: 'See'
//     },

// ])

// Slider.create([
//     {
//         title: "Operation Syatem",
//         subTitle: "Get all concept for operation system for Software learn",
//         imageUrl: "/static/images/s2.png"
//     },
//     {
//         title: "Java",
//         subTitle: "Get all concept for java and Data Structure",
//         imageUrl: "/static/images/s1.png"
//     },
//     {
//         title: "DBMS",
//         subTitle: "Get all concept for Database Management Syatem",
//         imageUrl: "/static/images/s3.png"
//     }
// ])


// Detail.create({
//     brandName:"Tech Solution",
//     brandIconUrl: "https://img.freepik.com/free-vector/flat-cms-illustration_23-2148849835.jpg?w=740&t=st=1711853503~exp=1711854103~hmac=95110f62a4e6eb295bbdef5af97c2ef7d17b4dfe66d21db9401452b40132aaeb",
//     links: [{
//         label: "Home",
//         url: "/"
//     },
//     {
//         label: "Services",
//         url: "/services"
//     },
//     {
//         label: "Galary",
//         url: "/galary"
//     },{
//         label: "About",
//         url: "/about"
//     },
//     {
//         label: "Contect Us",
//         url: "/contectUs"
//     }
// ]
// })

app.listen(Port, () => {
    console.log("Server started");
})