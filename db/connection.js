const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user : "root",
    password : "password123",
    database : "employees"
});

connection.connect();