"use strict";
exports.__esModule = true;
var message = "Welcome World";
console.log(message);
var sum;
var title = "Ram Rahim School";
var name = "Ashvin";
var total = 0;
var welcome = "Hi guyz,\nLet's welcome " + name + " for the prize distribution.";
console.log(welcome);
var n = null;
var u = undefined;
var list1 = [1, 2, 3, 4, 5, 6];
var list2 = [1, 2, 3, 4, 5, 6];
console.log(list1);
// Tuple Generation
var tup1 = ['Ashvin', 2];
console.log(tup1);
//any
var random = 10;
random = true;
random = "ashvin";
// See it is not throwing any type error because data type is any
random.toUpperCase();
//not throwing any error but its not good 
var r = 10;
r = "Hi";
r.toUpperCase(); // Ya know its working
//multitype
var multitype;
multitype = 20;
multitype = true;
multitype = "Ashvin";
//function in typescript
function add(num1, num2) {
    return num1 + num2;
}
add(5, 6);
function sub(num1, num2) {
    return num1 - num2;
}
sub(5);
sub(10, 5);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        return ("Hello I am " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Ashvin Sri');
console.log(emp1.employeeName);
console.log(emp1.greet());
