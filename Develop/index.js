const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const createTableOfContents = require("./utils/createTableOfContents");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'repo',
        message: 'Enter your repository: '
        },
    {
        type: 'input',
        name: 'desc',
        message: 'Enter a description: '
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter installation instructions: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information: '
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Enter contributing instructions: '
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter testing instructions: '
    },
    {
        type: 'list',
        name: 'liscense',
        message: 'Enter installation instructions: ',
        choices: ['email', 'phone', 'Slack', 'smoke signal']
    },
    {
        type: 'input',
        name: 'user',
        message: 'Enter your GitHub username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email: '
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter contact instructions: '
    }
];

// function to write README file
function writeToFile(fileName, data) {
    var readme = "";
    // create the table of contents
    var table = "";

    // loop through data
        // call createTableOfContents on each data.name
        // push to table
    // push table to readme

    // manipulate data into sections and add to readme variable

    // write to the readme file
    fs.writeFile(fileName, readme, function(err) {
        if (err) {
          return console.log(err);
        }
    
        console.log(readme);    
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            writeToFile('README.md', generateMarkdown(data));
        })
        .catch(error => {
            console.log(error);
        });
}

// function call to initialize program
init();
