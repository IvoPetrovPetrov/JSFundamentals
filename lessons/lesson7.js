//Loops - repeat operation multiple time
//for(statement1; statement2; statement3){}

const { printName } = require("./lesson8")

for(let i=0; i<5; i++){
    console.log('Hello World')
}

var cars = ["Volvo", "Toyota", "Honda"]
//for of loop
for(let car of cars){
    console.log(car)
    if(car == 'Toyota'){
        break
    }
}

//ES syntax for each loop
cars.forEach(car => {
    console.log(car)
})
printName('QA', 'Test')

//while
while (i < 10) {
  text += "The number is " + i;
  i++;
}

//do while - executed at least 1 time
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);