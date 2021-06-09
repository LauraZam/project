// npm - node package manager
//npm install npm@latest
//npm install express
//npm install в json
//npm start
let express = require('express')

let app = express()

app.use(express.static(__dirname + "/public"))
app.use(function (request, response, next) {
    // console.log('midleware 1');
    // response.sendStatus()
    // response.sendFile(__dirname + "/pages/index.html")
    // response.redirect('https://www.oilan.io/')
    
})
app.use(function (request, response, next) {
    console.log('Directory: ' + __dirname);
    response.sendFile(__dirname + "/pages/index.html")
})
app.get('/', function (request, response) {
    console.log('main route');
    response.send('<h1>main page</h1>')
})
app.get('/login', function (request, response) {
    console.log('login route');
    response.send('<h1>login page</h1>')
})
app.get('/about', function (request, response) {
    console.log('about route');
    response.send('<h1>about page</h1>')
})
app.listen(8080)