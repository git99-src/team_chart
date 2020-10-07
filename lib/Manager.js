const Employee = require("./Employee");

// Define and export the Manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email)
        this.officeNumber = officeNumber

    };
    // get office number method
    getOfficeNumber() {

        return this.officeNumber
    }

    // get role method
    getRole() {
        return "Manager";
    };

};

module.exports = Manager;