// Define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    // get name method
    getName() {
        return this.name;
    };

    // get ID method
    getId() {
        return this.id;
    };

    // get email method
    getEmail() {
        return this.email;
    };

    // get role method
    getRole() {
        return "Employee";
    };

};



module.exports = Employee;
