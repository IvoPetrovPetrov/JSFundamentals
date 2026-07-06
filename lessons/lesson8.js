//Functions - reusable component that can be called
//Functions enable better code organization and efficiency
//With functions you can reuse the same code many times.
//The same code, with different input, can produce different results.

function helloOne(){
    console.log('Hello one!')
}
helloOne()

//Anonymous functon
var helloTwo = function(){
    console.log('Hello Two!')
}
helloTwo()

//ES56 function syntax or arrow function
var helloThree = () => {
    console.log('Hello Three!')
}
helloThree()

//function with arguments
function printName(name, lastName){
    console.log(name + ' ' + lastName)
}
printName('QA', 'Test')

//function with return
function multiplyByTwo(number){
    var result = number * 2
    return result
}
var myResult = multiplyByTwo(5)
console.log(myResult)

function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 5);
console.log(result)

//import function
import { printAge } from '../helpers/printHelper.js'
printAge(5)

//import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(10)
helper.printName('Test')