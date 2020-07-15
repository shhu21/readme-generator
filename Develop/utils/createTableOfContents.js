function createTableOfContents(data) {
    return `* [${data}](#${data.toLowerCase()})
    `;
}

module.exports = createTableOfContents;