
type fruitype ={color:string,price:number,discount:boolean}

const apple:fruitype={
    color:'red',
    price:40,
    discount:true
}

apple.color="467"
apple.discount=false
apple.price=955

console.log("frit color:",apple.color)
console.log('frit price:',apple.price)
console.log('fruit discount',apple.discount)

// inference(no need to define propertey of data type )

const car ={
    color:'red',
    price:40,
    discount:true
}

car.color ="blue"

//  annotattion(the process of appling data type to each propertey,like as explicity)