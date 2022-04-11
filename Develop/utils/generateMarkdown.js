// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licenseChoice = data.license[0];
  let licenseStr = " "
  if (licenseChoice === "Apache 2.0 License") {
    licenseStr = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  };
  if (licenseStr === "MIT") {
    licenseStr = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };
  if (licenseStr === "Attribution License (BY)") {
    licenseStr = `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`
  };
  if (licenseStr === "GNU GPL v3") {
    licenseStr = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  };
  return licenseStr
};



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents:
  1.  [Description](#description)
  2.  [License](#license)
  3.  [Installation](#installation)
  4.  [Usage](#usage)
  5.  [Contributing](#contributing)
  6.  [Tests](#tests)
  7.  [Questions](#questions)


  ## Description
  ${data.description}

  ## License
  ${renderLicenseBadge(data)}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.github}
  ${data.email}"please email me here with any additional questions"`;
}

module.exports = generateMarkdown;
