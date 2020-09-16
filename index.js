const inquirer = require('inquirer');

ask();

async function ask() {
    console.log(await promptUser('Hello'));
    console.log(await promptUser('How are you?'));
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