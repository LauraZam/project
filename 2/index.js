// let EventEmitter = require("events");
// let emitter = new EventEmitter()
// let eventName = 'event1'
// emitter.on(eventName, function () {
//     console.log('Event1 started');
// })
// emitter.emit(eventName)




// let Emitter = require('events')

// // let emitter = new Emitter()

// let eventName = 'welcome'




// emitter.on(eventName, function (data) {
//     console.log('вы сказали: ' + data);
// })
// emitter.emit(eventName, 'привет')


// class User extends Emitter{
//     sayhello(data) {
//         this.emit(eventName, data)
//     }
// }

// let user = new User()
// user.on(eventName, function (name) {
//     console.log('здавствуйте, ' + name);
// })
// let name = 'alibi'
// user.sayhello(name)




let mm = require('./modules/myModule')

console.log(mm.lol(4 ,5));

// for (let i = 0; i < mm.length; i++) {

//     console.log(mm[i](4, 5));
    
// }