const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const createTableOfContents = require("./utils/createTableOfContents");
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
        message: 'Enter your repository: ',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\nPlease enter your repository name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'user',
        message: 'Enter your GitHub username: ',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\nPlease enter your GitHub username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email: ',
        validate: input => {
            if (input.includes('@')) {
                    return true;

            } else {
                console.log('\nPlease enter a valid email.');
                return false;
            }
        }
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
        name: 'Testing',
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
    }
];

// new line break
const addBreak = () => {
    return `

`;
}

const createReadme = data => {
    let readme = generateMarkdown(data.Repository)
        + badges[data.License]
        + addBreak()
        + generateMarkdown('Table Of Contents');

    const keys = Object.keys(data);
    keys.shift();
    keys.shift();
    keys.shift();

    // add and create the table of contents
    keys.forEach(key => readme += createTableOfContents(key))
    readme += addBreak();
    
    // add the rest of the readme content
    keys.forEach(key => {
        readme += generateMarkdown(key);
        if(key == 'Questions') {
            readme += `[${data.user}](https://github.com/${data.user}) </br>`
                + addBreak()
                + `<${data.email}> </br>`
                + addBreak();
        }
        readme += data[key]
            + addBreak();
    });
    
    return readme;
}

// function to write README file
const writeToFile = (fileName, data) => {
    // write to the readme file
    fs.writeFile(fileName, createReadme(data), (err) => {
        if (err) {
          return console.log(err);
        }
    });
}

// function to initialize program
const init = () => {
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