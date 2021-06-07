// let questionsArray = [
//     {
//         text: '2 + 2',
//         variants: ['4', '5'],
//         correct: 0
//     },
//     {
//         text: '5 + 5',
//         variants: ['10', '9'],
//         correct: 0
//     },
//     {
//         text: '4 + 4',
//         variants: ['44', '8'],
//         correct: 1
//     }
// ]

// let questionsBlock = $('#questions')
// let scoreParagraph = $('#score')
// let score = 0
// let tries = 0
// let isWin = false
// let checkAnswer = (questionIndex, variantIndex) => {
//     tries++
//     let question = questionsArray[questionIndex]
//     if (variantIndex === question.correct) {
//         score++

//     }else{
//         score--
//     }
//     let questionDiv = $(`#question${questionIndex}`)
//     questionDiv.hide()
//     scoreParagraph.text('Score: ' + score)
//     if (score === questionsArray.length) {
//         isWin == true
//         alert('you won')
//         startGame()
//     }

//     if (tries == questionsArray.length && isWin === false) {
//         alert('try again')
//         startGame()
//     }
// }    
// let startGame = () => {
//     isWin = false
//     tries = 0
//     questionsBlock.empty()
//     score = 0
//     scoreParagraph.text('Score: ' + score)
//     for (let i = 0; i < questionsArray.length; i++) {
//         questionsBlock.append(`
//             <div id ='question${i}'>
//                 <p>Question: ${questionsArray[i]['text']}</p>
//                 <button onclick='checkAnswer(${i}, 0)'>${questionsArray[i]['variants'][0]}</button>
//                 <button onclick='checkAnswer(${i}, 1)'>${questionsArray[i]['variants'][1]}</button>
//                 <hr>
//             </div>
//         `)
//     }
// }
// startGame()



//_____________________________________________________//



class Test {
    _title;
    _description;
    _questions = [];
    constructor(title, description, questions) {
        this._title = title
        this._description = description
        this._questions = questions
    }
}

class Question {
    _text;
    _variant1;
    _variant2;
    _correct;
    constructor(text, variant1, variant2, correct) {
        this._text = text
        this._variant1 = variant1
        this._variant2 = variant2
        this._correct = correct
    }
}

$('#addQuestionBtn').click(function () {
    

    let question1text = $('#question1text').val()
    let question1variant1 = $('#question1variant1').val()
    let question1variant2 = $('#question1variant2').val()

    let question2text = $('#question2text').val()
    let question2variant1 = $('#question2variant1').val()
    let question2variant2 = $('#question2variant2').val()

    
    let question1 = new Question(question1text, question1variant1, question1variant2, 2)
    let question2 = new Question(question2text, question2variant1, question2variant2, 1)
    let questionsArray = []
    questionsArray.push(question1)
    questionsArray.push(question2)
    console.log('Questions: ');
    console.log(questionsArray);
    //append block for new question
})

$('#createTestBtn').click(function () {
    let title = $('#title').val()
    let description = $('#description').val()
    let test = new Test()
    test._title = title
    test._description = description
    test._questions = questionsArray
    console.log('created test: ');
    console.log(test);
    

    //localStorage

})