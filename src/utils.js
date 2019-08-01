const toLower = (value) => {
    return value.toLowerCase();
}

const machineName = (value) => {
    return value
    .replace(/[^A-Za-z0-9 ]/g,'') // Remove unwanted characters, only accept alphanumeric and space
    .replace(/\s{2,}/g,' ') // Replace multi spaces with a single space
    .replace(/\s/g, "-"); // Replace space with a '-' symbol
}

module.exports = {
    toLower,
    machineName
}