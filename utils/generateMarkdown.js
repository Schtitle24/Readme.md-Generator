// Function to render the license badge based on the selected license
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL v3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return ''; // No license
  }
}

// Function to generate markdown for README
function generateMarkdown(answers) {
  // Render the license badge based on the selected license
  const licenseBadge = renderLicenseBadge(answers.license);

  // Build the markdown content
  return `# ${answers.title}

${licenseBadge}  <!-- Include the license badge -->

## Table of Contents
- [Description](#Description)
- [Instructions](#Instructions)
- [Usage](#Usage)
- [Contributions](#Contributions)
- [Tests](#Tests)
- [Questions](#Questions)


## <a name="Description"></a>Description
${answers.description}

## <a name="Instructions"></a>Instructions
${answers.instructions}

## <a name="Usage"></a>Usage
${answers.usage}${mediaContent}

## <a name="Contributions"></a>Contributions
${answers.contribute}

## <a name="Tests"></a>Tests
${answers.test}

## <a name="Questions"></a>Questions
GitHub: [${answers.github}](https://github.com/${answers.github}) 
<br>
Email: [${answers.email}](mailto:${answers.email})
`;
}

module.exports = generateMarkdown;
