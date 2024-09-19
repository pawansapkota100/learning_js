let user={
    name:"pawan",
    email:"pawan.gmail.com",
    phone:1234567890,
    'full name':"pawan kumar",
}


// console.log(user.name)
// console.log(user.phone)
user.name="pawabsadasd"
user.greeting= function(){
    console.log(`hello ${this.name}, nice to meet you!!`)

}
console.log(user.greeting())