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

    `;
};

module.exports = generateMarkdown;
