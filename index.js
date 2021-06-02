// let User = require('./modules/myModule')
// let user1 = User('mike', 'michael')
// user1.sayHello()
const http = require("http");
const Car = require("./modules/myModule");

let cars = [
    new Car("Bmw", "X5", 45000000),
    new Car("Mercedes", "w223", 75000000),
    new Car("Nissan", "Almera", 5000000),
    new Car("Volkswagen", "Polo", 6000000),
    new Car("Hyundai", "Accent", 7500000),
];

let server = http.createServer(function(request, response){
    if(request.method === "*"){
        if(request.url === "/tasks"){
            response.write(JSON.stringify(tasks));
        }
    }else if(request.method === "POST"){
        let body = "";
        let responseArray = [];
        request.on("data", function(buffer){
            body += buffer.toString();
    
            let userData = JSON.parse(body);
            let price = userData.price;

            
            for(let i = 0; i < cars.length; i++){
                if(cars[i].price <= price){
                    responseArray.push(cars[i]);
                }
            }

            response.write(JSON.stringify(responseArray));
            response.end();
        });
    }
    
})

server.listen(8080);

