
let myarray=[1,2,3,4,5]

console.log(myarray)
console.log(myarray[2])  

let name=["pawan","raman","rupesh"]
let last_name=["kumar","kumar","kumar"]

// console.log(name.concat(last_name))
const fullname=[...name, ...last_name]
console.log(fullname)