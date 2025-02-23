// we can create more objets with defing single "class"

class Empoloyee{
    name:string
    age:number
    department:string
// constructer is a function to intialize class properties
    constructor(name:string,age:number,department:string){
        this.name = name
        this.age = age
        this.department =department
    }
    EmployyeDetails(){
        console.log(`Employee name is ${this.name} from ${this.department} and his age is ${this.age}`)
    }
}

const employee = new Empoloyee('Nanda',45,"developer")

employee.EmployyeDetails()

const another_employee = new Empoloyee('kumar',51,'front_end Developer')

another_employee.EmployyeDetails()
