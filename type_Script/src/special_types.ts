

// void
// function username(){
//     return 'kalyan'
// }


function stdname(name:string){
    console.log(`student name is`,name)
}
stdname('nanda')

function add(a:number,b:number){
    return a+b
}
console.log(add(2,4))

// Never

function failedtocoectio():never{
    throw new Error('coetio failed')
}
const conection = ()=>{
    try{
        console.log('cocetio sccess')
    } catch(err){
        failedtocoectio()
    }
}
conection()