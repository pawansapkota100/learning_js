
function sum(a,b){
    sum= a+b
    return sum
}
// console.log(sum(1,2))

function CalculateCartPrice(...num1){
    return num1
}
// console.log(CalculateCartPrice(100,200,300))


// passing objects in function
user={
    name:"pawan",
    email:"pawan.gmail.com",
}
function HandleObjects(myobjects){
    return myobjects
}

objects= HandleObjects(user)
console.log(`objects username is ${objects.name} and email is ${objects.email}`)

// passing array in function

array=['1','2','3']

function Arrayfuncation(myarray){
    return myarray
}
resultarray= Arrayfuncation(array)
console.log(`the array is ${resultarray}`)
for (i=0;i<=resultarray.length;i++){
    console.log(resultarray[i])
}