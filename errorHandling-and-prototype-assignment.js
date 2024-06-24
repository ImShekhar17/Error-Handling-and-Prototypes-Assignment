/* Write a function called convertToNumber that takes a string as an argument and returns the equivalent
number. If the string cannot be converted to a number, the function should return the string "Invalid number".
Use error handling in javascript to achieve this output. */
function convertToNumber(str){
    try {
        return parseFloat(str)
    } catch (error) {
        return "invalid number"
    }
}
console.log(convertToNumber("123"));

/* Create a function called getPerson that takes an object as a parameter representing a person's name and age.
The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
However, if the parameter is not a valid object with the properties "name" and "age", the function should throw
an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
message if it occurs. */
function getPerson(person) {
    try {
      if (typeof person!== 'object' ||!person.hasOwnProperty('name') ||!person.hasOwnProperty('age')) {
        throw new Error('Invalid parameter type');
      }
      return `Name: ${person.name}, Age: ${person.age}`;
    } catch (e) {
      return e.message;
    }
  }
  console.log(getPerson({name: 'shekhar', age: 24}));


/* Create a class called Car with three properties: company, model, and year. The class should have a method
called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an
instance of the Car class and call the getDescription method. */
class Car {
    constructor(company, model, year) {
      this.company = company;
      this.model = model;
      this.year = year;
    }
  
    getDescription() {
      return `This is a ${this.year} ${this.company} ${this.model}`;
    }
  }
  
  // Instantiate an instance of the Car class
  const myCar = new Car('Toyota', 'Corolla', 2015);
  
  // Call the getDescription method
  console.log(myCar.getDescription()); // outputs "This is a 2015 Toyota Corolla"

/* Create a class called Employee with three properties: name, position, and salary. The class should have a
method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and
call the getSalary method. */
class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  
  // Instantiate an instance of the Employee class
  const employee = new Employee('shekhar', 'Software Engineer', 80000);
  
  // Call the getSalary method
  console.log(`The salary of ${employee.name} is rupees ${employee.getSalary()}.`);
  
/* Create a class called Person with two properties: name and age. The class should have a method called
getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the
constructor to set the values of name and age to "Unknown" and 0 if they are not provided. */
class Person {
    constructor(name = "Unknown", age = 0) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  // Instantiate an instance of the Person class with no arguments
  const person1 = new Person();
  console.log(person1.getDetails()); // outputs "Name: Unknown, Age: 0"
  
  // Instantiate an instance of the Person class with arguments
  const person2 = new Person("John Doe", 30);
  console.log(person2.getDetails()); // outputs "Name: John Doe, Age: 30"

/* Create a class called Calculator with a static method called add. The add method should take two numbers as
arguments and return their sum. Instantiate the Calculator class and call the add method. */
class Calculator {
    static add(a, b) {
      return a + b;
    }
  }
  
  // No need to instantiate the Calculator class, since add is a static method
  const result = Calculator.add(2, 3);
  console.log(result); // outputs 5

/* Create a class called User with properties username and password. Implement a getter method for password
that returns the password with all characters replaced by asterisks. Implement a setter method for password
that checks if the new password is at least 8 characters long and contains at least one number and one
uppercase letter. If the password is valid, set the new password. If not, log an error message. */
class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return this._password.replace(/./g, '*');
    }
  
    set password(newPassword) {
      if (this.isValidPassword(newPassword)) {
        this._password = newPassword;
      } else {
        console.error('Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
      }
    }
  
    isValidPassword(password) {
      const hasNumber = /\d/.test(password);
      const hasUppercase = /[A-Z]/.test(password);
      const isLongEnough = password.length >= 8;
      return hasNumber && hasUppercase && isLongEnough;
    }
  }
  
  // Create a new User instance
  const user = new User('johnDoe', 'ysecretpassword');
  
  // Try to set a new password that is invalid
  user.password = 'hort'; // logs an error message
  
  // Try to set a new password that is valid
  user.password = 'MySecretPassword123'; // sets the new password
  
  // Get the password with asterisks
  console.log(user.password); // outputs *************


/* Create a prototype object called Student with a property name. Add a method called printDetails to the
prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the
name "Mithun" and call the printDetails method. */

// Create a prototype object called Student
function Student(name) {
    this.name = name;
  }
  
  // Add a method called printDetails to the prototype
  Student.prototype.printDetails = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  // Instantiate a Student object with the name "Mithun"
  const mithun = new Student('Mithun');
  
  // Call the printDetails method
  mithun.printDetails(); // outputs "Hello, my name is Mithun"

/* Create a numberChecker function that takes an array of numbers as an argument and returns a function. The
returned function should take another number as an argument and return true if the number is in the array, and
false otherwise. */
function numberChecker(arr) {
    return function(num) {
      return arr.includes(num);
    };
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const checkNumber = numberChecker(numbers);
  
  console.log(checkNumber(3)); // outputs: true
  console.log(checkNumber(6)); // outputs: false


/** Write a function that takes an array of products and returns a function that filters the array by a given product
category. The function must filter an eCommerce products array by a specific category. The closure filters
products using the filter() method. Finally, it returns a new array containing only the products with the same
category as the input. */
function filterByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    };
  }
  
  // Example usage:
  const products = [
    { id: 1, name: "Product A", category: "Electronics" },
    { id: 2, name: "Product B", category: "Clothing" },
    { id: 3, name: "Product C", category: "Electronics" },
    { id: 4, name: "Product D", category: "Home Goods" },
    { id: 5, name: "Product E", category: "Clothing" }
  ];
  
  const filterProducts = filterByCategory(products);
  
  const electronics = filterProducts("Electronics");
  console.log(electronics);
  
  
  const clothing = filterProducts("Clothing");
  console.log(clothing);
  