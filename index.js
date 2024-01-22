// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// Create an array of questions for user input
const questions = [
  {
    name: 'title',
    type: 'input',
    message: 'Enter the project title:',
  },
  {
    name: 'description',
    type: 'input',
    message: 'Enter a project description:',
  },
  {
    name: 'license',
    type: 'list',
    choices: ['MIT', 'Apache 2.0', 'GPL v3'],
    message: 'Please choose your license',
  },
  {
    name: 'instructions',
    type: 'input',
    message: 'Enter installation instructions:',
  },
  {
    name: 'usage',
    type: 'input',
    message: 'Enter usage instructions:',
  },
  {
    name: 'contribute',
    type: 'input',
    message: 'Enter instructions for contribution:',
  },
  {
    name: 'test',
    type: 'input',
    message: 'Enter instructions for testing:',
  },
  {
    name: 'github',
    type: 'input',
    message: 'Enter github username:',
  },
  {
    name: 'email',
    type: 'input',
    message: 'Enter your preferred email for contact:',
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(`${fileName} has been created successfully!`);
  });
}

// Create a function to initialize app
function init() {
  // Ask questions and generate README
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    console.log(answers)
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();
