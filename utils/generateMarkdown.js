// Badge URLs for selected licenses

const licenseObjects = [
  {
    name: "None",
    badgeURL: "",
    url: ""
  },
  {
    name: "Apache License 2.0",
    badgeURL: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    url: "https://opensource.org/licenses/Apache-2.0"
  },
  {
    name: "Boost Software License 1.0",
    badgeURL: "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg",
    url: "https://www.boost.org/LICENSE_1_0.txt"
  },
  {
    name: "GNU General Public License v3.0",
    badgeURL: "https://img.shields.io/badge/License-GPLv3-blue.svg",
    url: "https://www.gnu.org/licenses/gpl-3.0"
  },
  {
    name: "GNU Affero General Public License v3.0",
    badgeURL: "https://img.shields.io/badge/License-AGPL%20v3-blue.svg",
    url: "(https://www.gnu.org/licenses/agpl-3.0"
  },
  {
    name: "GNU Lesser General Public License v2.1",
    badgeURL: "https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg",
    url: "https://www.gnu.org/licenses/old-licenses/lgpl-2.1"
  },
  {
    name: "MIT License",
    badgeURL: "https://img.shields.io/badge/License-MIT-yellow.svg",
    url: "https://opensource.org/licenses/MIT"
  },
  {
    name: "Mozilla Public License 2.0",
    badgeURL: "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg",
    url: "https://opensource.org/licenses/MPL-2.0"
  },
  {
    name: "The Unlicense",
    badgeURL: "https://img.shields.io/badge/license-Unlicense-blue.svg",
    url: "http://unlicense.org"
  }
];

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
