// function to get badge for selected license and render to page
const licenseBadge = license => {
    // If a license is selected return the badge
    if(license !== "None"){
        return `![License](https://img.shileds.io/badge/license-${license}-green.svg)`
    };
    // If no license is selected, return an empty string
    return "";
};

// function to generate markdown for READEME
const generateMarkdown = data => {
    return `# ${data.title}
    
    `;
};

module.exports = generateMarkdown;
