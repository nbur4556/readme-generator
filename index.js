const inquirer = require('inquirer');

getUserInput();

async function getUserInput() {
    await inquirer.prompt({
        message: 'Enter any value',
        name: 'promptValue',
        type: 'input'
    }).then(answer => {
        console.log(answer.promptValue);
    })

    await inquirer.prompt({
        message: 'Enter new value',
        name: 'promptValue',
        type: 'input'
    }).then(answer => {
        console.log(answer.promptValue);
    })
}