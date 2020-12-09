// function to get badge for selected license and render to page
const licenseBadge = license => {
    if(license !== "None"){
        return `![License](https://img.shileds.io/badge/license-${license}-green.svg)`
    };
    return "";
};

// function to generate markdown for READEME
const generateMarkdown = data => {
    return `# ${data.title}
    
    `;
};

module.exports = generateMarkdown;
