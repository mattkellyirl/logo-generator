const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
    {
        name: 'chars',
        type: 'input',
        message: 'Please enter up to 3 characters for your logo',
    },
    {
        name: 'charColor',
        type: 'input',
        message: 'Please choose a character color for your logo (hexidecimal value or color name accepted)',
    },
    {
        name: 'shape',
        type: 'list',
        message: 'Please choose a background shape for your logo',
        choices: ['Circle', 'Triangle', 'Square'],

    },
    {
        name: 'shapeColor',
        type: 'input',
        message: 'Please choose a shape color for your logo (hexidecimal value or color name accepted)'
    }
];

function init() {
    inquirer.prompt(questions)
        .then((response) => {
            // makeLogo(response);
            console.log("Generating your logo");
        });
};

init();