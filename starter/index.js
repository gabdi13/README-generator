const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
     },
     {
        type: "input",
        name: "description",
        message: "Provide a description of your project:",
     },
     {
        type: "input",
        name: "installation",
        message: "Provide a description of installation instructions:",
     },
     {
        type: "input",
        name: "usage",
        message: "Please provide usage guidelines",
     },
     {
        type: "input",
        name: "contributing",
        message: "Please provide contributuion information",
     },
     {
        type: "input",
        name: "tests",
        message: "Provide test instructions",
     },
     {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["MIT License", "Apache License 2.0", "GNU General Public License (GPL) v3", "Mozilla Public License 2.0", "BSD 3-Clause License"],
    },
  
];

// function to write README file
function writeToFile(fileName, data) {
    const outputPath = path.join(__dirname, fileName);
    fs.writeFile(outputPath, generateMarkdown(data), (err) => {
       if (err) {
          throw err;
       }
       console.log(`${fileName} has been successfully created!`);
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile("README.md", responses);
     });
}

// function call to initialize program
init();
