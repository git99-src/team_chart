// Define and export the Employee class
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    };
// get name method
getName () = function(gotName) {
    return gotName = this.name;
};

// get ID method
getId = function(gotID) {
    return gotID = this.id;
};

// get email method
getEmail = function(gotEmail) {
    return gotEmail = this.email;
};

// get role method
getRole = function() {
    return "Employee";
};

};





module.exports = Employee;
