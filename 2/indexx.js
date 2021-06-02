let http = require("http")

let tasks = ['hello', 'goodbye']

let server = http.createServer(function(request, response){

    if (request.method === 'GET') {
        if (request.url === '/tasks') {
            response.write(JSON.stringify(tasks))
        }
    }else if (request.method === 'POST') {
        console.log(request);
    }
    // response.write();
    response.end();
})

server.listen(8080);