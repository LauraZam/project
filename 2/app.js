let http = require("http");
let fs = require("fs");
var qs = require('querystring');

function handler(request, response) {
    if (request.url === "/students") {
        let fileContent = fs.readFileSync("./pages/students.html");
        response.setHeader("Content-Type", "text/html");
        response.write(fileContent);
    }
    else if (request.url === "/addstudents") {
        if (request.method === "GET") {
            let fileContent = fs.readFileSync("./pages/addStudent.html");
            response.setHeader("Content-Type", "text/html");
            response.write(fileContent);
        } else if (request.method === "POST") {
            console.log("Student added successfully");
            var body = '';

            request.on('data', function (data) {
                body += data;

                if (body.length > 1e6)
                    request.connection.destroy();
            });

            request.on('end', function () {
                let post = qs.parse(body)
                let userName = post.fullname
                let userAge = post.age
                let userGroup = post.group

                let newUser = {
                    fullname: userName,
                    age: userAge,
                    group: userGroup
                }

                let usersFileContent = fs.readFileSync("./db/student.txt");
                let usersArray = null;
                try {
                    usersArray = JSON.parse(usersFileContent)
                } catch {
                    usersArray = []
                }
                usersArray.push(newUser);
                fs.writeFileSync("./db/student.txt", JSON.stringify(usersArray))
            });
        }

    }
    else if (request.url === "/returnstudents") {
        if (request.method === "GET") {
            let fileContent = fs.readFileSync("./db/student.txt");
            response.setHeader("Content-Type", "text");
            response.write(fileContent);
        }
    }
    else if (request.url === "/editStudent") {
        if (request.method === "GET") {
            let fileContent = fs.readFileSync("./pages/editStudent.html");
            response.setHeader("Content-Type", "text/html");
            response.write(fileContent);
        }
        else if (request.method === "POST") {
            var body = '';

            request.on('data', function (data) {
                body += data;

                if (body.length > 1e6)
                    request.connection.destroy();
            });

            request.on('end', function () {
                let post = qs.parse(body)
                let userOldFullname = post.oldFullname
                let userNewFullname = post.newFullname
                let userNewAge = post.newAge
                let userNewGroup = post.newGroup

                let usersFileContent = fs.readFileSync("./db/student.txt");
                let usersArray = null;
                try {
                    usersArray = JSON.parse(usersFileContent)
                } catch {
                    usersArray = []
                }

                for (let i = 0; i < usersArray.length; i++) {
                    if (usersArray[i].fullname === userOldFullname) {
                        usersArray[i].fullname = userNewFullname;
                        usersArray[i].age = userNewAge;
                        usersArray[i].group = userNewGroup;
                        break;
                    }
                }

                fs.writeFileSync("./db/student.txt", JSON.stringify(usersArray))
            });
        }
    }
    else {
        response.statusCode = 404;

    }

    response.end();
}

http.createServer(handler).listen(8081);