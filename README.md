# Team-Profile-Generator

## Overview
In this unit's assignment, create an application which generates html files using input from a command line interface.


## Key Concepts

- The keyword, this, refers to the object it belongs to.

- Constructors are special functions that are extremely useful in creating objects of similar types. 

- Prototypes are JavaScript’s built in system, allowing objects to inherit features from other objects. Prototypes are advanced JavaScript topics.

- TDD: Test Driven-Development, writes tests for application features before writing any code. Ultimately, it helps write more understandable and maintainable code.

- OOP: Object Oriented Programming, describes a way to write programs. This way focuses on data: stored as object properties, and actions: stored as object methods.

- Classes, introduced by ES6, creates objects using class structures, similar to those found in other OOP programming languages. Under the hood, classes are just constructor functions with more intuitive syntax.

- Inheritance allows implentation of advanced OOP patterns such as inheritance without needing to understand all of the nuances of JavaScript's prototypal inheritance system.

## Algorithms
Async makes a function return a Promise. Await makes a function wait for a Promise. Functions running in parallel with other functions are called asynchronous.
```
async function main(){
    const managerInfo = await inquirer.prompt([
```

Function declarations are hoisted, but first need to be declared to access it.
```
    const manager = new Manager( managerInfo.name, userId++, managerInfo.email, managerInfo.office )
```
The .push() method adds one or more elements to the end of an array and returns the new length of the array. An array is created by the for loop to allow the user to cycle through the inquirer.prompt. 
```
  userList.push( manager )
    for( var i=0; i<managerInfo.teamMembers; i++ ){
        let employeeType = await inquirer.prompt([
```

The Node.js file system module allows you to work with the file system on your computer.
```
const fs = require("fs");
```

path.resolve will resolve an absolute path. Using __dirname is the absolute path to the directory containing the source file. When you use path.resolve will return the same result if you give the same path following __dirname.
```
const OUTPUT_DIR = path.resolve(__dirname, "output");
```

## Installation
npm init <initializer> can be used to set up a new or existing npm package. Initializer is an npm package named create-<initializer> , which will be installed by npx , and then have its main bin executed -- presumably creating or updating package. npm can install packages in local or global mode. In local mode, it installs the package in a node_modules folder in your parent working directory. This location is owned by the current user.
npm init and npm install are both ran from GitBash or VS Terminal. run nodemon .\app.js to run the Team Profile Generator.


## License
[License](https://choosealicense.com/licenses/mit)
