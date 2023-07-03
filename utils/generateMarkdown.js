function renderLicenseBadge(license) {}

function renderLicenseLink(license) {}

function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
const licenseBadge = renderLicenseBadge;
const licenseSection = renderLicenseSection; 
const licenseLink renderLicenseLink;

  return `# ${data.title}


## Description
## Table of Contents
## Installation
## Usage
## Tests
## Contributing
## Questions
For additional questions, please contact:
- GitHub:
- Email:

`;
}

module.exports = generateMarkdown;
