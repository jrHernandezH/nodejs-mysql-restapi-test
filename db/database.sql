CREATE DATABASE IF NOT EXISTS Companydb;

USE Companydb

CREATE TABLE employees (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employees;

INSERT INTO employee VALUES 
  (1, 'Joe', 1000),
  (2, 'Henry', 2000),
  (3, 'Katie', 3000),
  (4, 'Alex', 4000),
  (5, 'Bobby', 5000);