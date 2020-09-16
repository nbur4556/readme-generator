const inquirer = require('inquirer');

getUserInput()
console.log(buildMarkdownFile());

async function getUserInput() {
    const userInput = {
        title: '',
        description: '',
        installation: '',
        usage: '',
        license: '',
        contributors: '',
        tests: '',
        questions: ''
    }

    userInput.title = await promptUser('What is the project title?');
    userInput.description = await promptUser('What is the project description');
    userInput.installation = await promptUser('What are the installation instructions for the project?');
    userInput.usage = await promptUser('What are the usage instructions for the project?');
    userInput.license = await promptUser('What license does the project use?');
    userInput.contributors = await promptUser('Who are the contributors of the project?');
    userInput.tests = await promptUser('What tests were used on the project');
    userInput.questions = await promptUser('What is the contact information for the project?');

    console.log(userInput);
}

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

function buildMarkdownFile() {
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
    `)
}