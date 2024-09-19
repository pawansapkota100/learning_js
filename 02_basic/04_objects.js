let person={
    name:"pawan",
    age:19,
    address:"kathmandu"
}

let male={
    salary:19999,
    is_handsome:true
}

// object3= Object.assign(person,male)
// let object3={person,male} //this doesnot concat the object as we want
let object3={...person,...male}
console.log(object3)

console.log(Object.keys(person))
console.log(Object.values(person))

