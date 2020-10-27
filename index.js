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
    const { choice } = await([{
        type: "list", 
        name: "choice", 
        message: "What would you like to do?", 
        choices: [
            
        ]
    }])
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

