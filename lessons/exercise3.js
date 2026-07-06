/* Exercise 1 – Variables & Constants
Create two variables:
firstName
lastName
Create a constant:
country
Print:
Ivo Petrov lives in Bulgaria.
Use template literals, not concatenation.
 */
let nameFirst = "Ivo"
let nameLast = "Petrov"
const country = "Bulgaria"
console.log(`${nameFirst} ${nameLast} lives in ${country}`)

/* Exercise 2 – Data TypesCreate variables:
age
isQAEngineer
salary
favoriteLanguage
Print each value.
Then answer:
What is the type of each variable?
(Hint: use typeof.) */
let age = 10
let isQAEngineer = true
let favoriteLanguage = "English"
let salary = 100
console.log(typeof age)
console.log(typeof isQAEngineer)
console.log(typeof favoriteLanguage)
console.log(typeof salary)

/* Exercise 3 – Arrays Create:
Print:
first browser
last browser
total number of browsers
(Hint: use .length.) */
const browsers = [
    "Chrome",
    "Firefox",
    "Edge",
    "Safari"
];
console.log(browsers[0])
browsers[browsers.length - 1]
console.log(browsers.length)

/* Exercise 4 – Objects + Arrays Create:
Print:
Project: Playwright
Language: JavaScript
Automation: true */
const project = {
    name: "Playwright",
    languages: ["JavaScript", "TypeScript"],
    automation: true
}
console.log(`Project: ${project.name}`)
console.log("Language: " + project.languages[0])
console.log("Automation: " + project.automation)

/* Exercise 5 – Comparison Operators Given:
Print the results of:
age > 18
age >= 18
age == 18
age != 18
Observe the output (true or false). */
const age1 = 22;
console.log(age1 > 18)
console.log(age1 >= 18)
console.log(age1 == 18)
console.log(age1 != 18)

/* Exercise 6 – Logical Operators
Print:
loggedIn && hasPermission
loggedIn || hasPermission
!loggedIn
!hasPermission */
const loggedIn = true;
const hasPermission = false;
console.log(loggedIn && hasPermission)
console.log(loggedIn || hasPermission)
console.log(!loggedIn)
console.log(!hasPermission)

/* Exercise 7 – Conditional Statements
Print:
Excellent
Rules:
90+ Excellent
75-89 Very Good
60-74 Good
Below 60 Failed
Use if / else if / else. */
const score = 82
if (score >= 90){
    console.log("Excellent")
}else if(score >= 75 && score <= 89){
    console.log("Very Good")
}else if(score >= 60 && score <= 74){
    console.log("Good")
}else if(score < 60){
    console.log("Failed")
} else {
    console.log("N/A")
}

/* Exercise 8 – Real QA Scenario
If the severity is "High":
Print:
Immediate attention required.
Otherwise:
Normal priority. */
let minor = "Normal priority"
const bug = {
    id: 101,
    severity: "High",
    status: "Open",
    assignedTo: "John"
}
if(bug.severity == "High"){
    console.log("Immediate attention required.")
}else{
    console.log(minor)
}

/* Exercise 9 – Login Validation
Create:
const username = "admin";
const password = "Password123";
If both are correct:
Login successful
Otherwise:
Invalid credentials
Use:
&& */
const username = "admin"
const password = "Password123"
if (
    username === "admin" &&
    password === "Password123"
){
    console.log("Login successful")
}else{
    console.log("Invalid credentials")
}

/* Exercise 10 – Array + Condition
Given:
const environments = [
    "DEV",
    "QA",
    "UAT",
    "PROD"
];
If the array contains "QA":
Print:
Testing environment found.
Otherwise:
QA environment missing.
(Hint: use .includes() if you've covered it. If not, let me know and we'll solve it another way.) */
const environments = [
    "DEV",
    "QA",
    "UAT",
    "PROD"
]

if (environments.includes("QA")) {
    console.log("Testing environment found.")
} else {
    console.log("QA environment missing.")
}

/* ⭐ Bonus Challenge (Very QA-like) Create this object:
const testExecution = {
    passed: 58,
    failed: 2,
    skipped: 5
};
Calculate:
Total tests = ?
Then print:
Passed: 58
Failed: 2
Skipped: 5
Total: 65 */
 const testExecution = {
    passed: 58,
    failed: 2,
    skipped: 5
}
let totalTests =
    testExecution.passed +
    testExecution.failed +
    testExecution.skipped;
console.log(testExecution.passed)
console.log(testExecution.failed)
console.log(testExecution.skipped)
console.log(totalTests)