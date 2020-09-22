// Returns text for a markdown file
function buildMarkdownFile({ title, description, installation, usage, license, contribution, tests, contact }) {
    return (`
[${license.badgeLink}](${license.link})

# ${title}

## Description

${description}

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contribution](#Contribution)
* [Tests](#Tests)
* [Contact](#Contact)

## Installation

${installation}

## Usage

${usage}

## License

${title} is licensed under the [${license.name}](${license.link}) license.

## Contribution

${contribution}

## Tests

${tests}

## Contact

Reach out to me at the following

* Github: [https://github.com/${contact.github}](https://github.com/${contact.github})
* Email: ${contact.email}
    `);
}

exports.buildMarkdownFile = buildMarkdownFile;