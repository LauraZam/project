const box = $('#box')
let stepsCount = 0
let stepParagraph = document.getElementById('steps')
let playerParagraph = document.getElementById('player')
let map = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['0']
]
let firstNumber = 0
let secondNumber = 0
let currentOperation = null

function drawMap() {
    for (let i = 0; i < map.length; i++) {
        for (let k = 0; k < map[i].length; k++) {
            box.append(`<button class='number' value='${map[i][k]}'>${map[i][k]}</button>`)

        }
        $(box).append('<br>')
    }
}
drawMap()

let numbers = document.getElementsByClassName("number");
let vvod = document.getElementById('vvod')
// let vvod = $('#vvod')
for(let i = 0; i <= 9; i++){
    numbers[i].addEventListener("click", function(){ 
        vvod.value += numbers[i].innerHTML
    })
}
let minusButton = document.getElementById('min')
let plusButton = document.getElementById('plus')
let equalButton = document.getElementById('equal')

minusButton.addEventListener('click', function () {
    switch (currentOperation) {
        case null:
            firstNumber = Number(vvod.value)
            vvod.value = ''
            currentOperation = 'minus'
            break;
        case 'minus':
            firstNumber -= Number(vvod.value)
            vvod.value = ''
            currentOperation = 'plus'
            break;
        case 'plus':
                firstNumber += Number(vvod.value)
                vvod.value = ''
                currentOperation = 'minus'
                break;
        default:
            break;
    }
    
})
plusButton.addEventListener('click', function () {
    switch (currentOperation) {
        case null:
            firstNumber = Number(vvod.value)
            vvod.value = ''
            currentOperation = 'plus'
            break;
        case 'plus':
            firstNumber += Number(vvod.value)
            vvod.value = ''
            currentOperation = 'minus'
            break;
        case 'minus':
            firstNumber -= Number(vvod.value)
            vvod.value = ''
            currentOperation = 'plus'
            break;
        default:
            break;
    }
})
equalButton.addEventListener('click', function () {
    secondNumber = Number(vvod.value)
    vvod.value = ''
    switch (currentOperation) {
        case 'minus':
            vvod.value = firstNumber - secondNumber
        break;
        case 'plus':
            vvod.value = firstNumber + secondNumber
        break;
    
        default:
            break;
    }
})