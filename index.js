// TODO: Include packages needed for this application
const { notStrictEqual, notEqual } = require("assert");
const fs = require("fs");
const inq = require("inquirer");
const { title } = require("process");
const generateMarkdown = require("./utils/generateMarkdown");
const utils = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  "What is your project name?",
  "Describe your project:",
  "Installation Instructions:",
  "Usage Information:",
  "Contribution Guidelines:",
  "Test Instructions:",
  "Badges:",
  "filename?"
];

// TODO: Create a function to write README file
// fileName = "Sample_README.md", data = template
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Your README is ready!"));
}

// TODO: Create a function to initialize app
function init() {
  inq
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "title",
      },
      {
        type: "input",
        message: questions[1],
        name: "description",
      },
      {
        type: "input",
        message: questions[2],
        name: "install",
      },
      {
        type: "input",
        message: questions[3],
        name: "usage",
      },
      {
        type: "input",
        message: questions[4],
        name: "contribution",
      },
      {
        type: "input",
        message: questions[5],
        name: "test",
      },
      {
        type: "input",
        message: questions[6],
        name: "badges",
      },
      {
        type: "input",
        message: questions[7],
        name: "filename",
      },
    ])
    .then((response) => {
        const readme = (generateMarkdown(response));
        console.log(readme);
    });
}

// Function call to initialize app
init();

// pseudo and notes

// fs.writeFile("Sample_README.md", template, (err) =>
//   err ? console.error(err) : console.log("Your README is ready!")
// );
