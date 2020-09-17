// Returns text for a markdown file
function buildMarkdownFile({ title, description, installation, usage, license, contributors, tests, questions }) {
    return (`
# ${title}

## Description

${description}

## Table of Contents

TABLE OF CONTENTS

## Installation

${installation}

## Usage

${usage}

## License

${license}

## Contributors

${contributors}

## Tests

${tests}

## Questions

${questions}
    `);
}

exports.buildMarkdownFile = buildMarkdownFile;