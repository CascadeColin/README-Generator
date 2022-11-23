function renderLicenseLink(license) {
  if (license === 'MIT License'){
    return `https://opensource.org/licenses/MIT`
  }
  if (license === 'ISC License'){
    return `https://opensource.org/licenses/ISC`
  }
  if (license === 'GNU General Public License v3.0'){
    return `https://opensource.org/licenses/GPL-3.0`
  }
  if (license === 'Mozilla Public License 2.0'){
    return `https://opensource.org/licenses/MPL-2.0`
  }
  else {
    return ``;
  }
}

function renderLicenseBadge(license) {
  if (license === 'MIT License'){
    return `![${license}](https://img.shields.io/badge/License-MIT-brightgreen)`
  }
  if (license === 'ISC License'){
    return `![${license}](https://img.shields.io/badge/License-ISC-brightgreen)`
  }
  if (license === 'GNU General Public License v3.0'){
    return `![${license}](https://img.shields.io/badge/License-GNUv3.0-brightgreen)`
  }
  if (license === 'Mozilla Public License 2.0'){
    return `![${license}](https://img.shields.io/badge/License-MPL2.0-brightgreen)`
  }
  else {
    return ``;
  }
}

function renderLicenseSection(license, username) {
  const year = new Date().getFullYear();
  return `This project is licensed under [${license}](${renderLicenseLink(license)}) by ${username}, Copyright ${year}.`
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
  
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
- [Appendix](#appendix)
  
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

${renderLicenseSection(data.license, data.username)}

## Questions

You can find me on GitHub at:  https://github.com/${data.username}/

Have questions, comments, or want to learn more about me work?  Contact me directly at ${data.email}.
  
## Appendix

This README was created using [README Generator](https://github.com/CascadeColin/README-Generator) by Colin Marshall.  For more information, contact cascade.colin@gmail.com.`;
}

module.exports = generateMarkdown;
