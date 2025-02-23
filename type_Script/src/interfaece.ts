
// interfaece is used to define  before creation of object, we can see that both object properties and its data_types.

interface Student{
    name:string
    age:number
    subject?:string
    department:string
}

const student:Student = {
    name:'nanda',
    age:45,
    department:'Developer'
}

const newstd:Student ={
    name:'kumar',
    department:'eee',
    age:54
}
console.log(newstd.name)
console.log(student.name,student.age,student.department)
console.log(student.name,student.age,student.department,newstd.name)

// inheritance(taking elements from parent to child by using "extends" )

interface Student{
    name:string
    age:number
    subject?:string
    department:string
}

interface player extends Student{
    playerId:string
}

const captain:player={
    name:'nanda kumar',
    age:45,
    department:'football',
    playerId:'AMM042'   
}

console.log(`player name is ${captain.name}, his age is ${captain.age} and playerId is ${captain.playerId}`)