let daymarksBlock = $('#daymarks')
let dayMarks = JSON.parse(localStorage.getItem('dayMarks'))
for (let i = 0; i < dayMarks.length; i++) {
        daymarksBlock.append(`
            <p>Date: <br>${dayMarks[i]['date']}</p><br>
        `)
}
for (let i = 0; i < dayMarks.length; i++) {
    for (let n = 0; n < dayMarks[i]['students'][i].length; n++) {
        daymarksBlock.append(`
            <p>Name:  ${dayMarks[i]['students'][i]['fullname']}</p>
        `)
        
    }
    
}
let students = dayMarks[0]['students'][1]['fullname']
console.log(students);