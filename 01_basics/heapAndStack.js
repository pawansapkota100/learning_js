
//  stack(primitive datatype use it) and heap(non-primitive datatype use it)

// in stack actual copy of data is passed to different variables
// in heap reference of data is passed to different variables

let number= 123
let number1=number

console.log(number1)
number1=567
console.log(number1)
console.log(number)

let user={
    "name":"pawan",
    "city":"kathmandu"
}
user1=user
console.log(user1)

user1.name="rupesh"
user1.city="lalitpur"

console.log(user)
console.log(user1)