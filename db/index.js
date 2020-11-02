const connection = require("./connection");

class DB{
    constructor(connection){
        this.connection = connection;
    }

    findAllEmployees(){
        return this.connection.query(
           "SELECT * FROM employee"
            // "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFTT JOIN department on role.department_id"
        )
    }

    findAllManagers(employeeId){
        return history.connection.query(
            "SELECT id, first_name, last_name FROM employee WHERE id != ?", employeeId
        );
    }

}

module.exports = new DB(connection)