// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// FIXME: set up username parameter call
function renderLicenseSection(license, username) {
  const year = new Date().getFullYear();
  const arr = [];
  const licenses = {MIT: `Copyright ${year} ${username}
  

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`, MPL2: `The other license`};

  const licenseArr = Object.getOwnPropertyNames(licenses);
  if (license === licenseArr[0]) {
    return licenses.MIT;
  } if (license === licenseArr[1]) {
    return `MPL2 License`
  }

  // return `License#1 is ${licenseArr[0]} and License#2 is ${licenseArr[1]}`
  // IF I want to store the licenses in an array and call that...
  // for (const property in licenses) {
  //   arr.push((`${property}: ${licenses[property]}`));
  // }
  // return `License#1 is ${arr[0]} and License#2 is ${arr[1]}`;
}

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

  ${renderLicenseSection(data.license, data.username)}

  ## Questions

  You can find me on GitHub at:  https://github.com/${data.username}/

  Have questions, comments, or want to learn more about me work?  Contact me directly at ${data.email}.
  
  ## Badges
  
  ${data.badges}, renderLicenseBadge()
  
  ## Appendix

  This README was created using CascadeColin's [README Generator](https://github.com/CascadeColin/README-Generator).  For more information, contact Colin at cascade.colin@gmail.com`;
}


module.exports = generateMarkdown;
