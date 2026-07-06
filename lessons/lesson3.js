//objects {key:value pair}
var custormer = {
    firstName: 'Ivo',
    lastName: 'Petrov',
    cars: ["Volvo", "Toyota", "Honda"]
}

console.log(custormer)
console.log(custormer.firstName)
console.log(custormer.lastName)

//arrays [values inside the array, index]
var car = ["Volvo", "Toyota", "Honda"]
car[1] = "Tesla"
console.log(car[0])
console.log(car[1])
console.log(car[2])
console.log(custormer.cars[2])

var person = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
})