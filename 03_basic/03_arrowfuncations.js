const user={
    name:"pawan",
    email:"pawan.gmail.com",
    phone:1234567890,
    'full name':"pawan kumar",
    greeting: function(){
        console.log(`hello ${this.name}, nice to meet you!!`)
        console.log(this);
    }
}

user.greeting()
user.name="rupesh"
user.greeting()

// arrow function

const addtwonum= (num1,num2) =>{
    console.log(num1+num2)
}
addtwonum(5,4)


const subnum=(num1,num2)=> num1-num2

console.log(subnum(5,2))