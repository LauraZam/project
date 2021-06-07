// let input = document.getElementById('input')
// input.addEventListener('input', function () {
//     input.value.toUpperCase()
// })

let origWord  = 'kingdom'
let lives = 10

let livesPar = document.getElementById('lives')
livesPar.innerText = lives
let wordPar = $('#word')
let input = document.getElementById('letter')
input.addEventListener('input', function () {
    let letter = this.value
    let found = false
    for (let i = 0; i < origWord.length; i++) {
        if (origWord[i] === letter) {
            found = true
            break
        }
        
    }
    if (!found) {
        lives--
        livesPar.innerText = lives
    }else{
        
        // wordPar.empty()
        for (let i = 0; i < origWord.length; i++) {
            if (origWord[i] === letter) {
                wordPar.append(letter)
            }
            
        }
    }
    if(wordPar.value === origWord){
        alert('you won')
    }else if (lives === 0) {
        alert('you lose')
    }
    console.log(found);
    // console.log(letter);
    this.value = ''
})