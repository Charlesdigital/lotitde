const assertEqual = require('./assertEqual');

function head(data) {
    if (data.length === 0) {
        return undefined;
    }
    return data[0]

}

module.exports = head;