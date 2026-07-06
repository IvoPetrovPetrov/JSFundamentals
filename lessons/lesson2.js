//Concatination and Interpolation
var price = 50
var item = "cup"
//var messageToPrint = "The price of the cup is 10 euro" 
//var messageToPrint = "The price of the "+item+" is "+price+" euros" //concatination
var messageToPrint = `The price of the ${item} is ${price} euros` //interpolation
console.log(messageToPrint)