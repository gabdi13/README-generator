// generateMarkdown.js

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateLicenseBadge(license) {
  // Add more license badges and URLs as needed
  const licenseBadges = {
    "MIT License": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Apache License 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GNU General Public License (GPL) v3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "BSD 3-Clause License": "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  };

  return licenseBadges[license] || "";
}

function generateMarkdown(data) {
  const title = capitalizeFirstLetter(data.title);
  const description = capitalizeFirstLetter(data.description);
  const installation = capitalizeFirstLetter(data.installation);
  const usage = capitalizeFirstLetter(data.usage);
  const contributing = capitalizeFirstLetter(data.contributing);
  const tests = capitalizeFirstLetter(data.tests);

  const licenseBadge = generateLicenseBadge(data.license);

  return `
# ${title}

${licenseBadge}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## Tests
${tests}

## License
This project is licensed under the ${data.license} License - see the [LICENSE](LICENSE) file for details.
  `;
}


module.exports = generateMarkdown;

