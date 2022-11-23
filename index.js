// TODO: Include packages needed for this application, probably won't use
// const { notStrictEqual, notEqual } = require("assert");
const fs = require("fs");
const inq = require("inquirer");
// importing process as an object, probably won't use
// const { title } = require("process");
const generateMarkdown = require("./utils/generateMarkdown");
const utils = require("./utils/generateMarkdown");
// const getUsername = async () => {
//   const user = await username;
//   return user;
// }

// TODO: Create an array of questions for user input
const questions = [
  "What is your project name?",
  "Describe your project:",
  "Installation Instructions:",
  "Usage Information:",
  "Contribution Guidelines:",
  "Test Instructions:",
  "Badges:",
  "Enter your GitHub username:",
  "Enter your email address:",
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
        default: "My Title",
      },
      {
        type: "input",
        message: questions[1],
        name: "description",
        default: "This is my description.",
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
        name: "badges",
        default: "Here are my badges.",
      },
      {
        type: "input",
        message: questions[7],
        name: "username",
        default: "CascadeColin",
      },
      {
        type: "input",
        message: questions[8],
        name: "email",
        default: "cascade.colin@gmail.com",
      },
      {
        type: "input",
        message: questions[9],
        name: "filename",
        default: "Sample_README",
      },
      {
        type: "list",
        message: questions[10],
        name: "license",
        choices: ["MIT","MPL2"],
        default: "MIT",
      },
    ])
    .then((response) => {
        const filename = `${response.filename}.md`;
        const template = (generateMarkdown(response));
        writeToFile(filename, template);
        test = response.username;
    });
}

// Function call to initialize app
init();

