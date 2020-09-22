const inquirer = require('inquirer');
const fs = require('fs');
const readme = require('./src/build-readme.js');
const licenses = require('./src/license-options.js');

const userData = {
    title: '',
    description: '',
    installation: '',
    usage: '',
    license: '',
    contribution: '',
    tests: '',
    contact: {
        github: '',
        phoneNumber: '',
        email: ''
    }
};

// Runtime
getUserInput()
    .then(() => {
        writeMarkdownFile(readme.buildMarkdownFile(userData));
    });

// Gets input from user and stores in userInput object
async function getUserInput() {
    let licenseName;

    userData.title = await promptUser('What is the project title?');
    userData.description = await promptUser('What is the project description');
    userData.installation = await promptUser('What are the installation instructions for the project?');
    userData.usage = await promptUser('What are the usage instructions for the project?');
    licenseName = await promptUserList('What license does the project use?', licenses);
    userData.contribution = await promptUser('What are the contribution guidelines for this project?');
    userData.tests = await promptUser('What are the testing instructions for the project?');
    userData.contact.github = await promptUser('What is your Github user name?');
    userData.contact.phoneNumber = await promptUser('What is your phone number?');
    userData.contact.email = await promptUser('What is your email?');

    userData.license = getLicenseByName(licenseName);
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
// Prompts a message and list of options to the user, and promises a value
function promptUserList(msg, options) {
    return new Promise((resolve, reject) => {
        inquirer.prompt({
            message: msg,
            name: 'promptValue',
            type: 'list',
            choices: options
        }).then(answer => {
            resolve(answer.promptValue);
        }).catch((err) => {
            reject(err);
        });
    });
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

function getLicenseByName(name) {
    for (let license of licenses) {
        if (license.name == name) {
            return license;
        }
    }
}