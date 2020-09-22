const inquirer = require('inquirer');
const fs = require('fs');
const readme = require('./src/build-readme.js');
const licenses = require('./src/license-options.js');

// Contains all data sent to build readme file
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

    // Prompts user for information to build readme
    userData.title = await promptUser('What is the project title?');
    userData.description = await promptUser('What is the project description');
    userData.installation = await promptUser('What are the installation instructions for the project?');
    userData.usage = await promptUser('What are the usage instructions for the project?');
    licenseName = await promptUserList('What license does the project use?', licenses);
    userData.contribution = await promptUser('What are the contribution guidelines for this project?');
    userData.tests = await promptUser('What are the testing instructions for the project?');
    userData.contact.github = await promptUser('What is your Github user name?');
    userData.contact.email = await promptUser('What is your email?');

    // Set license object
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
    const path = getRelativePath();

    // Check if directory exists
    if (fs.existsSync(`.\\results`) != true) {
        // If directory does not exist, create directory
        fs.mkdir(`.\\results`, (err) => {
            if (err) throw err;
        });
    }
    if (fs.existsSync(path) != true) {
        // If directory does not exist, create directory
        fs.mkdir(path, (err) => {
            if (err) throw err;
        });
    }

    // Write file
    fs.writeFile(`${path}\\${fileName}`, data, () => {
        console.log(`Write file successful`);
        console.log(`\nReadme file can be located at ${process.argv[1]}\\${path}\n`)
    })
}

// Creates relative path string with userData.title as a directory
function getRelativePath() {
    let titleDir = userData.title.toLowerCase();
    titleDir = titleDir.replace(' ', '_');

    return `results\\${titleDir}`;
}

// Returns license object by license name
function getLicenseByName(name) {
    for (let license of licenses) {
        if (license.name == name) {
            return license;
        }
    }
}