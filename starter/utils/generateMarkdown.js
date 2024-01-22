// generateMarkdown.js

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateMarkdown(data) {
  const title = capitalizeFirstLetter(data.title);
  const description = capitalizeFirstLetter(data.description);
  const installation = capitalizeFirstLetter(data.installation);
  const usage = capitalizeFirstLetter(data.usage);
  const contributing = capitalizeFirstLetter(data.contributing);
  const tests = capitalizeFirstLetter(data.tests);

  return `
# ${title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)

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
  `;
}


module.exports = generateMarkdown;

