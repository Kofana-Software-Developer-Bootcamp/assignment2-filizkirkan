const express = require("express")
const { requestCalculator, xmlToJson } = require("./helper")
const cors = require("cors")



const app = express();
app.use(express.json());
app.use(cors());


// const http = require('http')
// const intA = 4
// const intB = 6

// const server = http.createServer((req, res) => {
//     const url = req.url;

//     if(url == '/') {
//         res.write("Index Sayfasi")
//     }
//     else if(url == '/add') {
//         requestCalculator("Add", req.query.intA, req.query.intB).then((response) => {
//             res.send(xmlToJson(response, "Add"))
//          })
//     }
//     // res.write("Merhaba")
//     res.end()


// })




app.get("/", (req, res) => {
     res.send("Running Again");
 })

 app.get("/add", (req, res) => {
    requestCalculator("Add", req.query.intA, req.query.intB).then((response) => {
         res.send(xmlToJson(response, "Add"))
     })
 })


 app.get("/subtract", (req, res) => {
    requestCalculator("Subtract", req.query.intA, req.query.intB).then((response) => {
    res.send(xmlToJson(response, "Subtract"))
     })
})

 app.get("/multiply", (req, res) => {
    requestCalculator("Multiply", req.query.intA, req.query.intB).then((response) => {
    res.send(xmlToJson(response, "Multiply"))
    })
})

 app.get("/divide", (req, res) => {
    requestCalculator("Divide", req.query.intA, req.query.intB).then((response) => {
    res.send(xmlToJson(response, "Divide"))
    })
})




const port = 3000

app.listen(port, () => {
    console.log('Sunucu port' + port + 'de başlatıldı.')
})



