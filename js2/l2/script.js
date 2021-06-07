class Student{
    id
    fullname;
    group;
    status;
    constructor(id, fullname, group){
        this.id = id
        this.fullname = fullname
        this.group = group
        this.status = false
    }
}
class DayMark{
    students;
    date;
    constructor(students, date){
        this.students = students
        this.date = date
    }
}
let students = [
    new Student(1, 'John', 'sep-172'),
    new Student(2, 'Michael', 'sep-172'),
    new Student(3, 'Monica', 'sep-172'),
    new Student(4, 'Patricia', 'sep-172'),
]

const studentCheck = (id) => {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students[i].status = !students[i].status
            
        }
        
    }
}
let studetsBlock = $('#studentsBlock')
let submitBtn = $('#submitBtn')
let checkBtn = $('#check')
for (let i = 0; i < students.length; i++) {
    studetsBlock.append(`
        <p>Name: ${students[i].fullname}</p>
        <p>Group: ${students[i].group}</p>
        <input type="checkbox" onchange="studentCheck(${students[i].id})">
        <hr>
    `)
    
}
let dayMarks = []
submitBtn.click(function () {
    let dayMark = new DayMark(students, Date.apply())
    dayMarks.push(dayMark)
    localStorage.setItem('dayMarks', JSON.stringify(dayMarks))
    console.log(dayMarks);
})
checkBtn.click(function () {
    location.href = 'days.html'
})
//Date() = Date.apply()