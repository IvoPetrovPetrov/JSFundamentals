//JS vs TS
//cant change values from 1 type to another
//TS controlled data more precisly. Strict typing

var customerFirstName = 'Test'
var customerLastName = 'QA'
var customerAge = 36

type Customer = {firstName: string, lastName: string, active: boolean}
var firstCustomer: Customer = {
    firstName: 'Test1',
    lastName: 'Test2', 
    active: true,
    occupation: 'Plovdiv'
}
