function createTableOfContents(data) {
    return `* [${data}](#${data.toLowerCase().replace(' ', '-')})`;
}

module.exports = createTableOfContents;