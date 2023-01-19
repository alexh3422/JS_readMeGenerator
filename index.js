// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  "what is the project title?",
  "Description of Project?",
  "Installation Instructions?",
  "License/s?",
  "Contributing Members?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: questions[0],
      },
      {
        type: "input",
        name: "description",
        message: questions[1],
      },
      {
        type: "input",
        name: "installation",
        message: questions[2],
      },
      {
        type: "input",
        name: "licenses",
        message: questions[3],
      },
      {
        type: "input",
        name: "contributing",
        message: questions[4],
      },
    ])
    .then((inquirerResponses) => {
      console.log("Generating README...");
      writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
    });
}

// Function call to initialize app
init();
