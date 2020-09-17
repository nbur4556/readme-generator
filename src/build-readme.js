// Returns text for a markdown file
function buildMarkdownFile(data) {
    console.log(data);

    return (`
# TITLE

## Description

DESCRIPTION

## Table of Contents

TABLE OF CONTENTS

## Installation

INSTALLATION

## Usage

USAGE

## License

LICENSE

## Contributors

CONTRIBUTORS

## Tests

TESTS

## Questions

QUESTIONS
    `);
}

exports.buildMarkdownFile = buildMarkdownFile;