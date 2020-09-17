const inquirer = require('inquirer');
const fs = require('fs');

const userInput = {
    title: '',
    description: '',
    installation: '',
    usage: '',
    license: '',
    contributors: '',
    tests: '',
    questions: ''
};

// Runtime
getUserInput()
    .then(() => {
        writeMarkdownFile(buildMarkdownFile());
    });

// Gets input from user and stores in userInput object
async function getUserInput() {
    userInput.title = await promptUser('What is the project title?');
    userInput.description = await promptUser('What is the project description');
    userInput.installation = await promptUser('What are the installation instructions for the project?');
    userInput.usage = await promptUser('What are the usage instructions for the project?');
    userInput.license = await promptUser('What license does the project use?');
    userInput.contributors = await promptUser('Who are the contributors of the project?');
    userInput.tests = await promptUser('What tests were used on the project');
    userInput.questions = await promptUser('What is the contact information for the project?');
}

// Prompts a message to the user, and promises a value
function promptUser(msg) {
    return new Promise((resolve, reject) => {
        inquirer.prompt({
            message: msg,
            name: 'promptValue',
            type: 'input'
        }).then(answer => {
            resolve(answer.promptValue);
        }).catch((err) => {
            reject(err);
        });
    })
}

// Returns text for a markdown file
function buildMarkdownFile() {
    console.log(userInput);

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

// Creates or overwrites a markdown file
function writeMarkdownFile(data, fileName = `README.md`) {
    // Check if directory exists
    if (fs.existsSync('./results') != true) {
        // If directory does not exist, create directory
        fs.mkdir('./results', (err) => {
            if (err) throw err;

            console.log('Make directory successful');
        })
    }

    // Write file
    fs.writeFile(`./results/${fileName}`, data, () => {
        console.log(`Write file successful`);
    })
}