// require inquirer, mysql
const {prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

init();

function init(){
    const introText = logo({ name : "Employee Manager"}).render()

    console.log(introText)

    IntroPrompts();
}

// make a connection 


// main menu 
async function IntroPrompts(){
    const { choice } = await prompt([{
        type: "list", 
        name: "choice", 
        message: "What would you like to do?", 
        choices: [
            {
                name: "View Employees",
                value: "EMPLOYEES"
            },
            // {
            //     name : "View Employees By Department",
            //     value : "EMPLOYEES_BY_DEPT"
            // },
            // {
            //     name : "View Employess By Manger",
            //     value : "EMPLOYEES_BY_MANGAEER"
            // },
            {
                name : "Add New Employeee", 
                value : "NEW_EMPLOYEE"
            },
            // {
            //     name : "Remove Employee",
            //     value : "DELETE_EMPLOYEE"
            // },
            {
                name : "Update Employees' Role",
                value : "UPDATE_ROLE"
            },
            // {
            //     name : "Update Employees' Manager",
            //     value : "UPDATE_MANAGER"
            // },
            {
                name : "View All Roles",
                value : "VIEW_ALL"
            },
            {
                name : "Add Role",
                value : "ADD_ROLE"
            },
            // {
            //     name : "Remove Role",
            //     value : "REMOVE_ROLE"
            // },
            {
                name : "View Departments",
                value : "VIEW_ALL_DEPT"
            },
            {
                name : "Add Department",
                value : "ADD_DEPT"
            },
            // {
            //     name : "Remove Department",
            //     value : "DELETE_DEPT"
            // },
            {
                name : "Quit",
                value : "QUIT"
            }
        ]
    }
]);

switch(choice){
    case "EMPLOYEES":
        return findAllEmployees();
    // case "EMPLOYEES_BY_DEPT":
    //     return viewEmployeesByDept();
    // case "EMPLOYEES_BY_MANGAEER":
    //     return viewEmployeesByManager();
    case "NEW_EMPLOYEE":
        return addNewEmployee();
    // case "DELETE_EMPLOYEE":
    //     return deleteEmployee();
    case "UPDATE_ROLE":
        return updateEmployeeRole();
    // case "UPDATE_MANAGER":
    //     return updateEmployeeManager();
    case "VIEW_ALL":
        return viewEverything();
    case "ADD_ROLE":
        return addEmployeeRole();
    case "VIEW_ALL_DEPT":
        return viewDepartments();
    case "ADD_DEPT":
        return addDepartment();
    case "QUIT":
        return quit();

    default:
        return quit();

}
}

async function findAllEmployees(){
    const employees = await db.findAllEmployees();

    console.log("\n");
    console.table(employees);

    IntroPrompts()
}

async function quit(){
    return 
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

