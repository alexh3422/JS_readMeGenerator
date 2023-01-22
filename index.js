// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  "what is the project title?",
  "What are the installation instructions (if any)?",
  "Contributing Members are",
  "Tests completed",
  "Select a license for your project",
  "What  is your email so you can be contacted with questions regarding this project?",
  "What is a description of the project?",
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
        name: "installation",
        message: questions[1],
      },
      {
        type: "input",
        name: "contributing",
        message: questions[2],
      },
      {
        type: "input",
        name: "tests",
        message: questions[3],
      },
      {
        type: "list",
        name: "licenses",
        message: questions[4],
        choices: [
          "MIT",
          "GPL-3.0",
          "Apache-2.0",
          "BSD-3-Clause",
          "BSD-2-Clause",
          "Boost-1.0",
          "CC0-1.0",
          "EPL-1.0",
          "MPL-2.0",
          "AGPL-3.0",
          "GPL-2.0",
          "LGPL-3.0",
          "Unlicensed",
        ],
      },
      {
        type: "input",
        name: "questions",
        message: questions[5],
      },
      {
        type: "input",
        name: "description",
        message: questions[6],
      },
    ])
    .then((inquirerResponses) => {
      console.log("Generating README...");

      writeToFile(
        "./generatedREADME/README.md",
        generateMarkdown({ ...inquirerResponses })
      );
    });
}

// Function call to initialize app
init();
