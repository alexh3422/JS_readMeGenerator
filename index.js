
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
const path = require("path");

// array of questions for user
const questions = [
  "what is the project title?",
  "What are the installation instructions (if any)?",
  "Contributing Members are?",
  "What tests were completed?",
  "Select a license for your project",
  "What is your Github username?",
  "What is a description of the project?",
  "What is your email address?",
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// questions for user
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
      {
        type: "input",
        name: "email",
        message: questions[7],
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


init();
