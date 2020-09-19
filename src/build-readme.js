// Returns text for a markdown file
function buildMarkdownFile({ title, description, installation, usage, license, contributors, tests, questions }) {
    return (`
${license.badgeLink}

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

${title} is licensed under ${license.name}.

## Contributors

${contributors}

## Tests

${tests}

## Questions

${questions}
    `);
}

exports.buildMarkdownFile = buildMarkdownFile;