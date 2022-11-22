// TODO: Include packages needed for this application
const { notStrictEqual, notEqual } = require('assert');
const fs = require('fs')
const inq = require('inquirer')
const utils = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = ['What is your project name?', 'Describe your project:', 'Installation Instructions:','Usage Information:','Contribution Guidelines:','Test Instructions:'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// pseudo and notes 
// const template = `# TITLE\n\n## Table of Contents\n\n- [Description](#Description)\n- [Usage](#Usage)\n- [License](#license)\n- [Badges](#badges)\n\n## Description\n\nlorem ipsum\n\n## Usage\n\nhow do?\n\n## License\n\nimport license obj\n\n## Badges\n\ninclude some badges`;

//     fs.writeFile("Sample_README.md", template, (err) =>
//       err ? console.error(err) : console.log("Your README is ready!")
//     );