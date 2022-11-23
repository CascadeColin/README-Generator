const fs = require("fs");
const inq = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const utils = require("./utils/generateMarkdown");
const questions = [
  "What is your project name?",
  "Describe your project:",
  "Installation Instructions:",
  "Usage Information:",
  "Contribution Guidelines:",
  "Test Instructions:",
  "Enter your GitHub username:",
  "Enter your email address:",
  "filename?"
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Your README is ready!"));
}

function init() {
  inq
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "title",
        default: "My Title",
      },
      {
        type: "editor",
        message: questions[1],
        name: "description",
        default: "INSTRUCTIONS:\nWrite your description here.  Delete these two sentences before saving, then close your editor.",
      },
      {
        type: "input",
        message: questions[2],
        name: "install",
        default: "Here is how to install the app.",
      },
      {
        type: "input",
        message: questions[3],
        name: "usage",
        default: "How to use the app.",
      },
      {
        type: "input",
        message: questions[4],
        name: "contribution",
        default: "Here's how you can help!",
      },
      {
        type: "input",
        message: questions[5],
        name: "test",
        default: "Test it.",
      },
      {
        type: "input",
        message: questions[6],
        name: "username",
        default: "CascadeColin",
      },
      {
        type: "input",
        message: questions[7],
        name: "email",
        default: "cascade.colin@gmail.com",
      },
      {
        type: "input",
        message: questions[8],
        name: "filename",
        default: "Sample_README",
      },
      {
        type: "list",
        message: questions[9],
        name: "license",
        choices: ["MIT License", "ISC License", "GNU General Public License v3.0", "Mozilla Public License 2.0"],
        default: "MIT License",
      },
    ])
    .then((response) => {
        const filename = `${response.filename}.md`;
        const template = (generateMarkdown(response));
        writeToFile(filename, template);
    });
}

init();