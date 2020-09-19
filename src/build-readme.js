// Returns text for a markdown file
function buildMarkdownFile({ title, description, installation, usage, license, contributors, tests, questions }) {
    return (`
[${license.badgeLink}](${license.link})

# ${title}

## Description

${description}

## Table of Contents

[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contributors](#Contributors)
[Tests](#Tests)
[Questions](#Questions)

## Installation

${installation}

## Usage

${usage}

## License

${title} is licensed under the [${license.name}](${license.link}) license.

## Contributors

${contributors}

## Tests

${tests}

## Questions

${questions}
    `);
}

exports.buildMarkdownFile = buildMarkdownFile;