// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [License](#license)
  - [Questions](#Questions)
  - [Badges](#Badges)
  
  ## Description
  
  ${data.description}
  
  ## Installation
  
  ${data.install}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contribution}
  
  ## Tests
  
  ${data.test}
  
  ## License

  renderLicenseLink()
  renderLicenseSection()

  ## Questions

  You can find me on GitHub at:  https://github.com/${data.username}/

  Have questions, comments, or want to learn more about me work?  Contact me directly at ${data.email}.
  
  ## Badges
  
  ${data.badges}, renderLicenseBadge()`;
}


module.exports = generateMarkdown;
