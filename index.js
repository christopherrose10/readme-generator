// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license do you want for your project?',
        choices: ['MIT', 'BSD3', 'ISC', 'APACHE2.0', 'None'] 
    }
];

const promptUser = () => {
    return inquirer.prompt(questions)
        .then(data => {
            const readmeContent = generateMarkdown(data);

            // const { message}

            // // TODO: Create a function to write README file
            fs.writeFile('README.md', readmeContent, err => {
                if (err) throw err;
                console.log('Portfolio complete! Check out index.html to see the output!');

            });
        });
};


// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// // init();
promptUser();

