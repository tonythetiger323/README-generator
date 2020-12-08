// require dependencies
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your projects name?"
  },
  {
    type: "input",
    name: "tech",
    message: "What technology did you use in the"
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project."
  },
  {
    type: "list",
    name: "license",
    message: "What type of license does your project have?",
    choices: ["Apache 2.0", "MIT", "GPL 3.0", "BSD 3", "BSD 2", "None"]
  },
  {
    type: "input",
    name: "install",
    message: "What command should be run to install dependencies?",
    default: "npm install"
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test"
  },
  {
    type: "input",
    name: "usage",
    message: "Please describe how to use the application."
  },
  {
    type: "input",
    name: "contribute",
    message:
      "What are the guidelines for open-source contributions to the repo?"
  },
  {
    type: "input",
    name: "credit",
    message:
      "Are there any resources or individuals you would like to credit for helping with the project?"
  }
];

// function to write README file
const writeToFile = (fileName, data) =>
  fs.writeFileSync(path.join(process.cwd(), "output", fileName), data);
// function to initialize program
const init = () => {
  // run inquirer prompts
  inquirer.prompt(questions).then(response => {
    writeToFile("README.md", generateMarkdown({ ...response }));
    console.log("README generated!");
  });
};

// function call to initialize program
init();
