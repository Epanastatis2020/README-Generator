

function generateMarkdown(data) {

  return `
  # ${data.title}
  ## Description
  [![License](https://img.shields.io/badge/License-${data.license}-<Blue>.svg)](https://shields.io/)
  ${data.description}
  ## Table of Contents
  * [User Story](#userStory)
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
  [Images If Available](${data.images})
  ## Video
  [Video If Available](${data.video})
  ## Tests
  ${data.tests}
  
  ## Contact
  Github: [${data.githubUser}](https://github.com/${data.githubUser})
  Email: <${data.email}>
  `;
}

module.exports = generateMarkdown;
