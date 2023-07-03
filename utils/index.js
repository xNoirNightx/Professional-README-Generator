const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'project title:'
      },
      {
        type: 'input',
        name: 'title',
        message: ':'
      },
      {
        type: 'input',
        name: 'title',
        message: ':'
      },
      {
        type: 'input',
        name: 'title',
        message: ':'
      },
      {
        type: 'input',
        name: 'title',
        message: ':'
      },
      {
        type: 'input',
        name: 'title',
        message: ':'
      },
      {
        type: 'input',
        name: 'title',
        message: ':'
      },
    //   add more prompts here for future edits
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)
}

// Function call to initialize app
init();
