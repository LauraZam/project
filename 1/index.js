// let a = 5
// let b = 6
// console.log(a + b);
// for (let i = 0; i < 10; i++) {
//     console.log('hello world' + i);
    
// }
// if (process.argv[2] > 0) {
//     console.log(process.argv[3]);
// }else{
//     console.log(process.argv[3].split('').reverse().join(''));
// }

// switch (process.argv[3]) {
//     case '*':
//         console.log(process.argv[2] * process.argv[4]);
//         break;
//     case '+':
//         console.log(Number(process.argv[2]) + Number(process.argv[4]));
//         break;
//     case '/':
//         console.log(process.argv[2] / process.argv[4]);
//         break;
//     case '-':
//         console.log(process.argv[2] - process.argv[4]);
//         break;
//     default:
//         break;
// }
let postCount = 0
let getCount = 0
let http = require('http')
let server = http.createServer(function (request, response) {
    // let meesage = ''
    if (request.method === 'POST') {
        postCount += 1
        
        
    }else if(request.method === 'GET'){
        getCount += 1
        
        
    }
    if(request.method === 'GET' && request.url === '/lol'){
        postCount = 0;
        getCount = 0
        
    }
    response.write('post' + postCount + '   get' + getCount)
    // response.write(request.method + ' ' + request.url)
    response.end()
})
server.listen(8080)