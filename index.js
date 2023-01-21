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

const apacheLicense =
  "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
const mitLicense =
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const gplLicense =
  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
const noLicense = "";

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
        type: "list",
        name: "licenses",
        message: questions[3],
        choices: ["MIT", "Apache-2.0", "GPL-3.0", "None"],
      },
      {
        type: "input",
        name: "contributing",
        message: questions[4],
      },
    ])
    .then((inquirerResponses) => {
      console.log("Generating README...");
      let license;
      switch (inquirerResponses.licenses) {
        case "MIT":
          // Render MIT license badge
          license = mitLicense;
          break;
        case "GPL-3.0":
          // Render GPL-3.0 license badge
          license = gplLicense;
          break;
        case "Apache-2.0":
          // Render Apache-2.0 license badge
          license = apacheLicense;
          break;
        default:
          license = noLicense;
      }
      writeToFile(
        "./generatedREADME/README.md",
        generateMarkdown({ ...inquirerResponses, license: license })
      );
    });
}

// Function call to initialize app
init();
