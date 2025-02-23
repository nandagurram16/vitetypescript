
// function apple(){
//     return 'nanda'
// }

// let a = 45 
// let b='15'

// function user():number{
//     return a
// }

// fuction expression(to assign ananomous function to a variable)

const number = function(c:number,d:string){
    return c+d
}
console.log(number(45,'ffege'))

// optional parameter()

const product = (title:string,price:number,discount?:boolean)=>{
    return(`the product nmae is ${title} and price is ${price}`)
}
console.log(product('apple',345594,true))