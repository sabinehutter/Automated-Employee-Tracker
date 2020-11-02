// require inquirer, mysql
const {
    prompt
} = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

init();

function init() {
    const introText = logo({
        name: "Employee Manager"
    }).render()

    console.log(introText)

    IntroPrompts();
}

// make a connection 


// main menu 
async function IntroPrompts() {
    const {
        choice
    } = await prompt([{
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [{
                name: "View Employees",
                value: "EMPLOYEES"
            },
            {
                name: "Add New Employeee",
                value: "NEW_EMPLOYEE"
            },
            {
                name: "Update Employees' Role",
                value: "UPDATE_ROLE"
            },
            {
                name: "View All Roles",
                value: "VIEW_ALL_ROLES"
            },
            {
                name: "Add Role",
                value: "ADD_ROLE"
            },
            {
                name: "View Departments",
                value: "VIEW_ALL_DEPT"
            },
            {
                name: "Add Department",
                value: "ADD_DEPT"
            },
            {
                name: "Quit",
                value: "QUIT"
            }
        ]
    }]);

    switch (choice) {
        case "EMPLOYEES":
            return findAllEmployees();
        case "NEW_EMPLOYEE":
            return addNewEmployee();
        case "UPDATE_ROLE":
            return updateEmployeeRole();
        case "VIEW_ALL_ROLES":
            return viewRoles();
        case "ADD_ROLE":
            return addEmployeeRole();
        case "VIEW_ALL_DEPT":
            return viewDepartments();
        case "ADD_DEPT":
            return addNewDepartment();
        case "QUIT":
            return quit();

        default:
            return quit();

    }
}

async function findAllEmployees() {
    const employees = await db.findAllEmployees();

    console.log("\n");
    console.table(employees);

    IntroPrompts()
}

async function viewDepartments() {
    const departments = await db.viewDepartments();

    console.log("\n");
    console.table(departments);

    IntroPrompts()
}

async function viewRoles() {
    const roles = await db.viewRoles();

    console.log("\n");
    console.table(roles);

    IntroPrompts()
}

async function addNewEmployee() {
    await prompt([{
            type: "input",
            name: "NewEmployeeFirstName",
            message: "What is the new employees first name?",
        },
        {
            type: "input",
            name: "NewEmployeeLastName",
            message: "What is the new employees last name?",
        },
        {
            type: "input",
            name: "NewEmployeeRoleId",
            message: "What is the new employees role id?",
        },
        {
            type: "input",
            name: "NewEmployeeManagerId",
            message: "What is the new employees manager id?",
        }]).then(function (data) {
        db.addNewEmployee(data.NewEmployeeFirstName, data.NewEmployeeLastName, data.NewEmployeeRoleId, data.NewEmployeeManagerId);
        console.log("\n");
        console.log("Successfully Added");

        IntroPrompts()

    })
}

async function addNewDepartment() {
    await prompt([{
            type: "input",
            name: "NewDepartment",
            message: "What is the new department?",
        }]).then(function (data) {
        db.addNewDepartment(data.NewDepartment);
        console.log("\n");
        console.log("Successfully Added");

        IntroPrompts()

    })
}

async function updateEmployeeRole() {
    await prompt([{
            type: "input",
            name: "employeeId",
            message: "What is the id of the employees role that you would  like to  update?",
        },{
            type: "input",
            name: "roleId",
            message: "What is the new role for the employee?",
        }
    ]).then(function (data) {
        db.updateEmployeeRole(data.employeeId, data.roleId);
        console.log("\n");
        console.log("Successfully Added");

        IntroPrompts()

    })
}

async function addEmployeeRole() {
    await prompt([{
            type: "input",
            name: "NewRoleName",
            message: "What is the new role?",
        },{
            type: "input",
            name: "NewRoleSalary",
            message: "What is the new role salary?",
        },{
            type: "input",
            name: "NewRoleDeptId",
            message: "What is the new role department id?",
        }
    ]).then(function (data) {
        db.addEmployeeRole(data.NewRoleName, data.NewRoleSalary, data.NewRoleDeptId);
        console.log("\n");
        console.log("Successfully Added");

        IntroPrompts()

    })
}

async function quit() {
    break
}


// ask 
// Add (departments, roles, employees)

//View (departments, roles, employees)

// Update (employee roles)

// 3 functions
// function add()
// ask what table you want to add to
// make query (connection.query) - insert into 

// function view()
// ask whatt table you want to view
// make query (connection.query) - select


// function update()
// ask what table you want to update
// make query (connection.query) - updae ... set ..