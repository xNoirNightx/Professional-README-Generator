const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Enter the project title:'
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Enter the project description:'
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'Enter the installation instructions:'
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Enter the usage information:'
      },
      {
        type: 'list',
        name: 'License',
        message: 'Choose a license for your application:',
        choices: [
            'MIT License',
            'GNU GPLv3',
            'Apache License 2.0',
            'ISC License',
            'BSD 2-Clause "Simplified" License',
            // Add more license choices here
        ]
      },
      {
        type: 'input',
        name: 'Contributing',
        message: 'Enter the contribution guidelines:'
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'Enter the test instructions:'
      },
      {
        type: 'input',
        name: 'Github',
        message: 'Enter your GitHub username:'
      },
      {
        type: 'input',
        name: 'Email',
        message: 'Enter your email address:'
      }
        //   add more prompts here for future edits
    ];
  

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data)
      .then(() => {
        console.log(`README.md file generated as ${fileName}!`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers);
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error(error);
    });
};
// Function call to initialize app
init();


