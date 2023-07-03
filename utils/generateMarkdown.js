function renderLicenseBadge(license) {}

function renderLicenseLink(license) {}

function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}


## Description
${data.description}

## Table of Contents

## Installation
${data.installation}

## Usage
${data.usage}

## Tests
${data.tests}

## Contributing
${data.contributing}

## Questions
Any Questions ? , Please contact Me:
- GitHub:
- Email:

`;
}

module.exports = generateMarkdown;
