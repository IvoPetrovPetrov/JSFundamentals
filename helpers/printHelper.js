export function printAge(age){
    console.log(age)
}

export function printName(name){
    console.log(name)
}


class CustomerDetails{

    printFirstName(firstName){
        console.log(firstName)
    }
    printLastName(lastName){
        console.log(lastName)
    }
}

export const customerDetails = new CustomerDetails()