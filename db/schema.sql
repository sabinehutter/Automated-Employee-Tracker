
-- Drops the task_saver_db if it already exists --
DROP DATABASE IF EXISTS employee;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE employee;

USE employee;

-- Create the table tasks.
CREATE TABLE department (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(30) NOT NULL,
  salary decimal(10,2) NOT NULL,
  department_id INT DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id int NOT NULL AUTO_INCREMENT,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id INT DEFAULT NULL,
  manager_id INT DEFAULT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO employee (first_name,last_name) VALUES ('Sabine', 'Hutter');
INSERT INTO employee (first_name,last_name) VALUES ('John', 'Smith');
INSERT INTO employee (first_name,last_name) VALUES ('Jenna', 'Johnson');
INSERT INTO employee (first_name,last_name) VALUES ('Jeremy', 'Morris');