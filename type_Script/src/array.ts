

let cities:string[]=['kadiri','usa','vizag','karnataka'] //this process is called short hand notation

cities[0]='mysore'
console.log(cities)

//generic type notation

let countries:Array<string | number> = ["india","japan",34,45]

countries[1]=23
console.log(countries)

// any

let name:Array<any> =['nanda',23,56,true,{city:'kadiri'}]

console.log(name)