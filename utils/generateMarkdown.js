const licenseInfo = {
  'MIT License': {
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    link: 'https://opensource.org/licenses/MIT'
  },
  'GNU GPLv3': {
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    link: 'https://www.gnu.org/licenses/gpl-3.0'
  },
  'Apache License 2.0': {
    badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    link: 'https://opensource.org/licenses/Apache-2.0'
  },
  'ISC License': {
    badge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    link: 'https://opensource.org/licenses/ISC'
  },
  'BSD 2-Clause "Simplified" License': {
    badge: '[![License: BSD 2-Clause](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
    link: 'https://opensource.org/licenses/BSD-2-Clause'
  }
};

function renderLicenseBadge(license) {
  const licenseEntry = licenseInfo[license];
  return licenseEntry ? licenseEntry.badge : '';
}

function renderLicenseLink(license) {
  const licenseEntry = licenseInfo[license];
  return licenseEntry ? licenseEntry.link : '';
}

function renderLicenseSection(license) {
  const licenseEntry = licenseInfo[license];
  return licenseEntry ? `## License\n\nThis application is covered under the [${license}](${licenseEntry.link}) license.` : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.License);
  const licenseLink = renderLicenseLink(data.License);
  const licenseSection = renderLicenseSection(data.License);

  return `# ${data.Title}


## Description
---
${data.Description}

## Table of Contents
---
- [Installation](#installation)
- [Usage](#usage)
${licenseBadge ? `- [License](#license)\n` : ''}
- [Screenshots](#screenshots)
- [Tests](#tests)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
---
${data.Installation}

## Usage
---
${data.Usage}

## Screenshots
---
![screenshot1](./path/to/screenshot)\n

## Tests
---
${data.Tests}

## Contributing
---
${data.Contributing}

## Questions
---
Any Questions ? , Please contact Me:
- GitHub:[${data.Github}](https://github.com/${data.Github})
- Email: [${data.Email}](mailto:${data.Email})

`;
}

module.exports = generateMarkdown;
