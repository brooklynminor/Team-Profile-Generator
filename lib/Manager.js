//Manager is class
//properties include: officeNumber, getRole(), override returns 'Manager'

const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber)
        this.role = "Manger";
        this.officeNumber = officeNumber;
    }
    getRole() {
        return this.role;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }

}
module.exports = Manager;