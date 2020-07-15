const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const createTableOfContents = require("./utils/createTableOfContents");
// TODO: change to dynamic, data.keys() -> returns an array of the object's keys
const badges = {
    Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    BSD2: '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
    BSD3:  '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
};

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'Repository',
        message: 'Enter your repository: '
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Enter a description: '
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Enter installation instructions: '
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Enter usage information: '
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Enter contributing instructions: '
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Enter testing instructions: '
    },
    {
        type: 'list',
        name: 'License',
        message: 'Choose a license: ',
        choices: ['Apache', 'BSD2', 'BSD3']
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Enter contact instructions: '
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
    }
];

function addBreak() {
    return `

`;
}

function createReadme(data) {
    var readme = generateMarkdown(data.Repository)
        + badges[data.License]
        + addBreak()
        + generateMarkdown('Table Of Contents');

    var keys = Object.keys(data);
    keys.shift();
    keys.pop();
    keys.pop();
    
    for(let i = 0; i < keys.length; i++) {
        readme += createTableOfContents(keys[i]);
    }
    readme += addBreak();
    
    for(let i = 0; i < keys.length; i++) {
        readme += generateMarkdown(keys[i]);
        if(keys[i] == 'Questions') {
            readme += `[${data.user}](https://github.com/${data.user.replace(/ /g, '-')}) </br>`;
            readme += addBreak();
            readme += `<${data.email}> </br>`;
            readme += addBreak();
        }
        readme += data[keys[i]];
        readme += addBreak();
    }
    
    console.log(readme)
    return readme;
}

// function to write README file
function writeToFile(fileName, data) {
    console.log(data)

    // write to the readme file
    fs.writeFile(fileName, createReadme(data), function(err) {
        if (err) {
          return console.log(err);
        }
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            writeToFile('README.md', data);
        })
        .catch(error => {
            console.log(error);
        });
}

// function call to initialize program
init();

// TODO: code clean up