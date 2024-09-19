

// two type of datatype:
// 1. primitive:- string, number, boolean, null, undefined, symbol
// 2. non-primitive:- array, object, function

let id= Symbol(123)
let id1= Symbol(123)
console.log(id)
console.log(id1)
console.log(id===id1)

const myfunction= function(){
    console.log("hello world")
}

console.log(typeof myfunction)