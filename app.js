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
    // prompt user for inpput
    const askManager = inquirer.prompt(managerQuestions).then((answers) => {
        // build new manageer object
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        // add to array that will be used to render html
        employeeArray.push(newManager)
        const htmlString = render(employeeArray);
        // create folder and html file
        const outputFilePath = writeToFile("team.html", htmlString);
        console.log("`Created the HTML file");
    })

};

// create folder output and team.html file
function writeToFile(fileName, htmlString) {
    // get path for root output file
    let outputPath = path.join(process.cwd(), "./output");
    // if folder does not exist - make it
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath);
    }
    outputPath = path.join(outputPath, fileName);
    // create the html file 
    fs.writeFileSync(outputPath, htmlString);
    return outputPath;
}

