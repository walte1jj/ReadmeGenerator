function init() {

const inquirer = require("inquirer");
const fs = require("fs");
const generateReadme = require("./Develop/utils/generateMarkdown");
const path = require("path");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of your project?",
            name: "title",
        },
        
        {
            type: "input",
            message: "Provide a description of your project",
            name: "description",
        },

        {
            type: "input",
            message: "How do you install your application?",
            name: "installation",
        },

        {
            type: "input",
            message: "How do you use the application?",
            name: "usage",
        },
        {
            type: "input",
            message: "Give guidlines on how someone can contribute to your project",
            name: "contributing",
        },

        {
            type: "input",
            message: "Give instructions on testing",
            name: "tests",
        },

        {
            type: "checkbox",
            message: "Choose a license for your project",
            choices: ["Apache 2.0 License", "MIT", "Attribution License (BY)", "GNU GPL v3"],
            name: "license",
        },

        {
            type: "input",
            message: "Enter your GitHub username",
            name: "github",
        },

        {
            type: "input",
            message: "Enter your email address",
            name: "email",
        },
    ])
    .then((answers) => {
        return fs.writeFileSync(path.join (process.cwd(), "README.md"), generateReadme(answers));
    });
}

init();
