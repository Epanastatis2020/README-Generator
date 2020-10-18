const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            // Title of the Project
            type: 'input',
            name: 'title',
            message: "What is the title of the Project/README?",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log('No input was detected. Please enter a project/README title.');
                    return false;
                }
            }
        },
        {
            // Description 
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log('No input was detected. Please provide a description of your project.');
                    return false;
                }
            }
        },
        {
            // Installation Information
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions.',
            validate: installInput => {
                if (installInput) {
                    return true;
                }
                else {
                    console.log("No input detected. Please provide installation instructions.");
                    return false;
                }
            }
        },
        {
            // Usage Information
            type: 'input',
            name: 'usage',
            message: 'Please provide usage instructions.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                }
                else {
                    console.log('No input detected. Please provide usage instructions');
                    return false;
                }
            }
        },
        {
            // License
            type: 'list',
            name: 'license',
            message: 'Please select the  License that you are using.',
            choices: ['MIT' , 'Apache', 'ISC' , 'GNU GPLv3']
        },
        {
            // Image Gallery
            type: 'input',
            name: 'images',
            message: "Please provide a URL link to an image or gallery of images showcasing the project. If you don't have one, just put 'N/A'",
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                }
                else {
                    console.log('No input detected. Please provide a URL link.');
                    return false;
                }
            }
        },
        {
            // Video
            type: 'input',
            name: 'images',
            message: "Please provide a URL link to a video showcasing the project. If you don't have one, just put 'N/A'",
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                }
                else {
                    console.log('No input detected. Please provide a URL link.');
                    return false;
                }
            }
        },
        {
            // Test Information
            type: 'input',
            name: 'tests',
            message: "Please provide a test for your application, and provide an example on how to run it. If you don't have one, just put 'N/A'",
            validate: testInput => {
                if (testInput) {
                    return true;
                }
                else {
                    console.log('No input detected. Please provide a test.');
                    return false;
                }
            }
        },
        {
            // Github Username for profile link
            type: 'input',
            name: 'githubUser',
            message: 'Please enter your Github Username.',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log('Please enter your Github Username.');
                    return false;
                }
            }
        },
        {
            // Email to provide Contact Information
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        }
    ]);
};