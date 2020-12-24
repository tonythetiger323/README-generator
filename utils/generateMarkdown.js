// function to get badge for selected license and render to page
const licenseBadge = license => {
    // If a license is selected return the badge
    if(license !== "None"){
        return `![License](https://img.shileds.io/badge/license-${license}-green.svg)`
    };
    // If no license is selected, return an empty string
    return "";
};

// function to write the license section
const writeLicense = license => {
    // If a license is selected write a license section for README
    if(license !== "None") {
        return (
            `## License
            
            This project is licensed under the ${license} license.
            `
        );
    };
    
    return "";
}
// function to generate markdown for READEME
const generateMarkdown = data => {
    return `# ${data.title}
    ${licenseBadge(data.license)}

    ## Description
    
    ${data.description}

    ## Table of Contents

    * [Technology Used](#technology used)

    * [Installation](#installation)

    * [Usage](#usage)

    * [Contributing](#contributing)

    * [Tests](#tests)

    * [Questions](#questions)

    ## Installation

    To install application properly with all of its necessary dependencies run:

    ----------
    ${data.install}
    ----------

    ## Usage

    ${data.usage}

    ## Contributing

    ${data.contribute}

    ## Tests

    To run tests, run:

    ----------
    ${data.test}
    ----------

    ## Questions
    Have any questions regarding the repo, send me an email at ${data.email}.

    Interested in seeing more of what I've made? Take a look at [${data.github}](https://github.com/${data.github}/).

    `;
};

module.exports = generateMarkdown;
