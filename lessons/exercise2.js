/*
By completing these exercises, I've practiced:
Creating objects
Reading and updating properties
Deleting properties
Dot vs. bracket notation
Looping through object properties
Object methods
The this keyword
Nested objects
Arrays of objects
Built-in methods like Object.keys(), find(), and filter()
*/
/*
Exercise 1: Create an object
Create an object called person with the following properties:
name
age
city
Then print each property to the console.
Expected output (example):
John
25
London
*/
var man = {
    name: "QA",
    age: 36,
    city: "Plovdiv"
}
console.log(man.name)
console.log(man.age)
console.log(man.city)

/*
Exercise 2: Add and update properties
Given:
const car = {
  brand: "Toyota",
  model: "Corolla"
};
Tasks:
Add a property year.
Change the model.
Print the entire object.
*/
var car1 = {
    brand: "Toyota",
    model: "Corolla"
}
console.log(car1)

car1.year = 2000;
car1.model = "Rav4"
console.log(car1)

/*
Exercise 3: Delete a property
Given:
const book = {
  title: "1984",
  author: "George Orwell",
  pages: 328
};
Remove the pages property.
Print the object afterward.
*/
var book = {
  title: "1984",
  author: "George Orwell",
  pages: 328
}
console.log(book)

delete book.pages;
console.log(book)

/*
Exercise 4: Access properties dynamically
Given:
const student = {
  name: "Alice",
  grade: 90
};
Store "grade" in a variable.
Use bracket notation to print the grade.
*/
const student = {
  name: "Alice",
  grade: 90
};
const property = "grade";
console.log(student[property]);

/*
Exercise 5: Loop through an object
Given:
const pet = {
  name: "Buddy",
  type: "Dog",
  age: 4
};
Print:
name: Buddy
type: Dog
age: 4
*/
const pet = {
  name: "Buddy",
  type: "Dog",
  age: 4
};
for (const c in pet) {
  console.log(`${c}: ${pet[c]}`);
}

/*
Exercise 6: Object methods
Create an object:
const calculator = {
  ...
};
It should contain methods:
add(a, b)
subtract(a, b)
multiply(a, b)
*/
const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  }
};

console.log(calculator.add(5, 3));       // 8
console.log(calculator.subtract(10, 4)); // 6
console.log(calculator.multiply(4, 6));  // 24

/*
Exercise 7: Nested objects
Create this object:
const user = {
  name: "Sarah",
  address: {
    city: "Berlin",
    zip: "10115"
  }
};

Print only:
Berlin

Then update the ZIP code.
*/const user = {
  name: "Sarah",
  address: {
    city: "Berlin",
    zip: "10115"
  }
};

console.log(user.address.city);

user.address.zip = "10117";

console.log(user);

/*
Exercise 8: Objects inside arrays

Create:

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Keyboard", price: 100 }
];

Tasks:

Print all product names.
Print only products costing more than 500.
*/const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Keyboard", price: 100 }
];

// Print all names
for (const product of products) {
  console.log(product.name);
}

//console.log("------------");

// Print products over 500
for (const product of products) {
  if (product.price > 500) {
    console.log(product);
  }
}

/*
Exercise 9: Count object properties
Write a function:
function countProperties(obj) {

}

Example:
countProperties({
  a: 1,
  b: 2,
  c: 3
});

Returns:

3
*/
function countProperties(obj) {
  return Object.keys(obj).length;
}

console.log(countProperties({
  a: 1,
  b: 2,
  c: 3
}));

/*
Exercise 10: Build a mini inventory system

Create an object representing a store:

const store = {
  inventory: [
    { name: "Apple", quantity: 10 },
    { name: "Banana", quantity: 5 },
    { name: "Orange", quantity: 8 }
  ]
};

Write methods:

listItems()
findItem(name)
addStock(name, amount)
sellItem(name, amount)
*/
const store = {
  inventory: [
    { name: "Apple", quantity: 10 },
    { name: "Banana", quantity: 5 },
    { name: "Orange", quantity: 8 }
  ],

  listItems() {
    for (const item of this.inventory) {
      console.log(`${item.name}: ${item.quantity}`);
    }
  },

  findItem(name) {
    return this.inventory.find(item => item.name === name);
  },

  addStock(name, amount) {
    const item = this.findItem(name);

    if (item) {
      item.quantity += amount;
    }
  },

  sellItem(name, amount) {
    const item = this.findItem(name);

    if (item && item.quantity >= amount) {
      item.quantity -= amount;
    } else {
      console.log("Not enough stock.");
    }
  }
};

store.listItems();

store.sellItem("Apple", 3);

store.addStock("Banana", 10);

store.listItems();

/*
Challenge Exercise

Create an object that behaves like a simple bank account.

Requirements:

const account = {
  owner: "John",
  balance: 1000,

  deposit(amount) {},
  withdraw(amount) {},
  transfer(otherAccount, amount) {},
  printBalance() {}
};

Example:

const alice = {
  owner: "Alice",
  balance: 500
};

account.transfer(alice, 200);

console.log(account.balance); // 800
console.log(alice.balance);   // 700
*/
const account = {
  owner: "John",
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
  },

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds.");
    }
  },

  transfer(otherAccount, amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      otherAccount.balance += amount;
    } else {
      console.log("Transfer failed.");
    }
  },

  printBalance() {
    console.log(`${this.owner}: $${this.balance}`);
  }
};

const alice = {
  owner: "Alice",
  balance: 500
};

account.deposit(300);
account.withdraw(200);
account.transfer(alice, 400);

account.printBalance();
console.log(alice);