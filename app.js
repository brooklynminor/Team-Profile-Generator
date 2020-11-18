const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const render = require("./lib/htmlRenderer");

const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(__dirname, 'team.html');

let userList = []
let userId = 1

async function main(){
    // get the project info and number of people to include
    const managerInfo = await inquirer.prompt([
        {
            name: "name",
            message: "What is the manager's Name?"
        },
        {
            name: "email",
            message: "What is the manager's Email?"
        },
        {
            name: "office",
            message: "What is the manager's OfficeNumber?"
        },
        {
            name: "teamMembers",
            message: "How many members in your team?"
        }]
    )

    const manager = new Manager( managerInfo.name, userId++, managerInfo.email, managerInfo.office )
    userList.push( manager )
    // loop through and get user name/title for each person
    for( var i=0; i<managerInfo.teamMembers; i++ ){
        let employeeType = await inquirer.prompt([
            {
              type: "list",
              name: "type",
              message: "Employee type to add?",
              choices: [
                "Engineer",
                "Intern"
              ]
            } ] )
        employeeType = employeeType.type

        const employeeInfo = await inquirer.prompt([
            {
                name: "name",
                message: `What is the ${employeeType}'s Name?`
            },
            {
                name: "email",
                message: `What is the ${employeeType}'s Email?`
            },            
            {
                name: "info", // this is either 'github' or 'school' depending on employeeType
                message: `What is the ${employeeType}'s ${employeeType=='Engineer' ? 'GitHub' : 'School'}?`
            } ])

        const employee = employeeType==='Engineer' 
            ? new Engineer( employeeInfo.name, userId++, employeeInfo.email, employeeInfo.info )
            : new Intern( employeeInfo.name, userId++, employeeInfo.email, employeeInfo.info )
        userList.push( employee )
    }

    // Create the output directory if the output path doesn't exist
    if( !fs.existsSync(OUTPUT_DIR) ) fs.mkdirSync(OUTPUT_DIR)
    // use the pre-built render function to build the list...
    fs.writeFileSync(outputPath, render(userList), "utf-8");

    console.log( `Completed writing to: ${outputPath}` )
}
main()
