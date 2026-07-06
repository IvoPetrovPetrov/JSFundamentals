//Logical operators
//&& all values have to be TRUE for true
console.log(true && true)
console.log(true && false)

//OR any value should be TRUE for true
console.log(true || true)
console.log(true || false)
console.log(false || false)

var ageIsMoreThan18 = true
var isBGCitizen = false

var eligibilityForDriving = ageIsMoreThan18 || isBGCitizen
console.log('The citizen is eligible for: ' + eligibilityForDriving)

var eligibilityForDriving1 = ageIsMoreThan18 && isBGCitizen
console.log('The citizen is eligible for: ' + eligibilityForDriving1)

//Logical NOT
console.log(!true)
console.log(6 !== 10)