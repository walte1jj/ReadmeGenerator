function renderLicenseBadge(data) {
  const licenseChoice = data.license[0];
  let licenseStr = " "
  if (licenseChoice === "Apache 2.0 License") {
    licenseStr = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  };
  if (licenseChoice === "MIT") {
    licenseStr = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };
  if (licenseChoice === "Attribution License (BY)") {
    licenseStr = `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`
  };
  if (licenseChoice === "GNU GPL v3") {
    licenseStr = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  };
  return licenseStr
};

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
  ${data.github},
  ${data.email} please email me here with any additional questions`;
}

module.exports = generateMarkdown;
