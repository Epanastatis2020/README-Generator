

function generateMarkdown(data) {

  return `
  # ${data.title}
  ## Description
  [![License](https://img.shields.io/badge/License-${data.license}-<Blue>.svg)](https://shields.io/)
  ${data.description}
  ## Table of Contents
  * [User Story](#user story)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Images](#images)
  * [Video](#video)
  * [Tests](#tests)
  * [Contact](#contact)
  ## User Story
  ${data.userStory}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  This project uses the ${data.license} license.
  ## Images
  <a href=${data.images}</a>
  ## Video
  <a href=${data.video}</a>
  ## Tests
  ${data.tests}
  
  ## Contact
  Github: <a href=https://github.com/${data.githubUser}>${data.githubUser}</a>
  Email: <a href="mailto:${data.email}"</a>
  `;
}

module.exports = generateMarkdown;
