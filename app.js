const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");



const render = require("./lib/htmlRenderer");

let employeeArray = [];

const managerQuestions = [
    {
        name: "name",
        type: "input",
        message: "What is your manager's name?"
    },
    {
        name: "id",
        type: "input",
        message: "What is your manager's id?"
    },
    {
        name: "email",
        type: "input",
        message: "What is your manager's email?"
    },
    {
        name: "officeNumber",
        type: "input",
        message: "What is your manager's office number?"
    },
    {
        type: "list",
        message: "Which type of team member would you like to add:",
        name: "employeeType",
        choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members",
        ],
    },
]
const engineerQuestions = [
    {
        name: "name",
        type: "input",
        message: "What is your engineer's name?"
    },
    {
        name: "id",
        type: "input",
        message: "What is your engineer's id?"
    },
    {
        name: "email",
        type: "input",
        message: "What is your engineer's email?"
    },
    {
        name: "github",
        type: "input",
        message: "What is your engineer's Github username?"
    },
    {
        type: "list",
        message: "Which type of team member would you like to add:",
        name: "employeeType",
        choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members",
        ],
    },
]
main();

function main() {
    console.log("Please build your team")
    const askManager = inquirer.prompt(managerQuestions).then((answers) => {
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeeArray.push(newManager)
        console.log("done")
        const htmlString = render(employeeArray);
        const outputFilePath = writeToFile("team.html", htmlString);
        console.log("`Created the HTML file");
    })

};


function writeToFile(fileName, htmlString) {
    let outputPath = path.join(process.cwd(), "./output");
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath);
    }
    outputPath = path.join(outputPath, fileName);
    fs.writeFileSync(outputPath, htmlString);
    return outputPath;
}

