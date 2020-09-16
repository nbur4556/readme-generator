const inquirer = require('inquirer');

inquirer.prompt({
    message: 'Enter any value',
    name: 'promptValue',
    type: 'input'
}).then(answer => {
    console.log(answer.promptValue);
})