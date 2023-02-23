// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
function readmeInput() {
    return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is a description of your project?" 
    },
    {
        type: "input",
        name: "installation",
        message: "How would someone install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How would someone run your project?"
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2" ,"BSD3", "None"]
    },
    {
        type: "input",
        name: "contribute",
        message: "How would someone contribute to your project?",
    },
    {
        type: "input",
        name: "test",
        message: "How would someone test the application?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "fileName",
        message: "What do you want to name this README?"
    }
])
.then((answers) => {
    const readmeContent = generateMarkdown(answers);
    fs.writeFile(answers.fileName + '.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('README Created!')
    );
})

};

readmeInput()
