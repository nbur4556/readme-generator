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

const licenseOptions = [
    'Academic Free License v3.0', 'Apache license 2.0', 'Artistic license 2.0', 'Boost Software License 1.0', 'BSD 2-clause "Simplified" license',
    'BSD 3-clause "New" or "Revised" license', 'BSD 3-clause Clear license', 'Creative Commons license family', 'Creative Commons Zero v1.0 Universal',
    'Creative Commons Attribution 4.0', 'Creative Commons Attribution Share Alike 4.0', 'Do What The F*ck You Want To Public License',
    'Educational Community License v2.0', 'Eclipse Public License 1.0', 'European Union Public License 1.1', 'GNU Affero General Public License v3.0',
    'GNU General Public License family', 'GNU General Public License v2.0', 'GNU General Public License v3.0', 'GNU Lesser General Public License family',
    'GNU Lesser General Public License v2.1', 'GNU Lesser General Public License v3.0', 'ISC', 'LaTeX Project Public License v1.3c',
    'Microsoft Public License', 'MIT', 'Mozilla Public License 2.0', 'Open Software License 3.0', 'PostgreSQL License', 'SIL Open Font License 1.1',
    'University of Illinois/NCSA Open Source License', 'The Unlicense', 'zLib License'
]

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
    userData.license = await promptUserList('What license does the project use?', licenseOptions);
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