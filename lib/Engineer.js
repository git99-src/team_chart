const Employee = require("./Employee");

// Define and export the Engineer class
class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name, id, email)
        this.github = github

    };

    getGithub() {

        return this.github
    }



    // get role method
    getRole() {
        return "Engineer";
    };


};

module.exports = Engineer;