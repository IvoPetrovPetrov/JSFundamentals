/* Print: 
admin is Active
john is Inactive
mary is Active */
const users = [
    {
        username: "admin",
        password: "Password123",
        active: true
    },
    {
        username: "john",
        password: "John123",
        active: false
    },
    {
        username: "mary",
        password: "Mary123",
        active: true
    }
];
console.log(`${users[0].username} is ${users[0].active ? 'Active' : 'Inactive'}`);
console.log(`${users[1].username} is ${users[1].active ? 'Active' : 'Inactive'}`);
console.log(`${users[2].username} is ${users[2].active ? 'Active' : 'Inactive'}`);

/* Print 
Status: 200
Customer: Ivo
Balance: 250 */

const response = {
    status: 200,
    success: true,
    data: {
        id: 1001,
        customer: "Ivo",
        balance: 250
    }
};
let message = "API call successful"

console.log(`Status: ${response.status}`);
console.log(`Customer: ${response.data.customer}`);
console.log(`Balance: ${response.data.balance}`);
if (response.success) {
    console.log(message);
}else {
    console.log("API call failed");
}

/* PrintRunning tests against QA
*/
const environment = {
    name: "QA",
    url: "https://qa.company.com",
    database: "qa-db"
};
console.log(`Running tests against ${environment.name}`);
console.log(`URL: ${environment.url}`);
console.log(`Database: ${environment.database}`);
console.log(environment.url)

/* Print:
Build Failed
Otherwise:
Build Passed
failed > 0 */
const results = {
    passed: 48,
    failed: 2,
    skipped: 1
};
if (results.failed > 0) {
    console.log("Build Failed");
} else {
    console.log("Build Passed");
}

/* Find the first active Admin. with loop*/
const users1 = [
    {
        username: "admin",
        active: true,
        role: "Admin"
    },
    {
        username: "john",
        active: false,
        role: "User"
    },
    {
        username: "mary",
        active: true,
        role: "User"
    },
    {
        username: "superadmin",
        active: true,
        role: "Admin"
    }
];
let firstActiveAdmin = null;
for (let i = 0; i < users1.length; i++) {
    if (users1[i].active && users1[i].role === "Admin") {
        firstActiveAdmin = users1[i];
        break;
    }
}
if (firstActiveAdmin) {
    console.log(`First active Admin: ${firstActiveAdmin.username}`);
} else {
    console.log("No active Admin found");
}