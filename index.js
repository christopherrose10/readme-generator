// TODO: Include packages needed for this application
const fs = require('fs');
var inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const readmeContent = generateMarkdown;
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
];

const promptUser = () => {
    return inquirer.prompt(questions);
};

// const { message}

// // TODO: Create a function to write README file
fs.writeFile('README.md', readmeContent, err => {
    if (err) throw err;
    console.log('Portfolio complete! Check out index.html to see the output!');

});

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// // init();
promptUser()
    .then(answers => console.log(answers));
