const accountId = 123
let accountEmail= 'pawansapkota@gmail.com'
var accountPassword= "pawansapkota"
accountCity="kathmandu" //variable can be declare in this way also, but it is not recommended
let accountState

// accountId=2 //const keyword couldnot be modified
accountEmail='rupesh@gmail.com'
accountPassword='rupesh'
accountCity= 'budhanilkantha'
console.log(accountId);

/*
in modern js, there is use of const and let, var is not used because of issue  in block scope and function scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])