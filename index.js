const inquirer = require('inquirer');
const fs = require('fs');
const readme = require('./src/build-readme.js');

const userData = {
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
        writeMarkdownFile(readme.buildMarkdownFile(userData));
    });

// Gets input from user and stores in userInput object
async function getUserInput() {
    userData.title = await promptUser('What is the project title?');
    userData.description = await promptUser('What is the project description');
    userData.installation = await promptUser('What are the installation instructions for the project?');
    userData.usage = await promptUser('What are the usage instructions for the project?');
    userData.license = await promptUser('What license does the project use?');
    userData.contributors = await promptUser('Who are the contributors of the project?');
    userData.tests = await promptUser('What tests were used on the project');
    userData.questions = await promptUser('What is the contact information for the project?');
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