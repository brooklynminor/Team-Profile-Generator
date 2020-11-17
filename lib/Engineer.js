//Engineer is a class
//Properties include: school, getSchool(), getRole(), overide toi return 'Intern'

const Emplopyee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
    super(name, id, email);
    this.role = "Engineer";
    this.github = github;
 } 
 getRole() {
     return this.github;
 }
 getGithub() {
     return this.github;
 }
}

module.exports = Engineer;