let score= null

console.log(typeof score)

score_conversion= Number(score)
console.log (typeof score_conversion)
console.log(score_conversion)
// if string is converted to Number datatype, it return Nan 
// Nan is the number datatype

// null give 0 if it is converted to Number
//  if true is converted to Number if give 1 and 0 for false


let is_active=undefined

console.log(typeof is_active)

let conversion_is_active= Boolean(is_active)
console.log(conversion_is_active)
// if 0 it will give false and if 1 and other number it will give true
// if some string is provided it will give true , for empty string it will give false


// for use Number, String, Boolean, to convet into respective datatype


console.log(1+(2+'3'))