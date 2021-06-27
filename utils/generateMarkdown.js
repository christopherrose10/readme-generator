// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if(license != 'None') {
    return `![license](https://img.shields.io/badge/license-${license}-blue.png)`;
  } else {
    return '';
  }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
const renderLicenseLink =  license => {
  if(license != 'None') {
    return `* [License](#license)`;
  } else {
    return '';
  }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
const renderLicenseSection = license => {
  if(license != 'None') {
    return `## License
    This project is licensed under the ${license} license.
    `;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  
  If you have any questions about the application please feel free to reach out!

  [GitHub Profile](https://github.com/${data.github})

  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
