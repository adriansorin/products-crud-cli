const fs = require('fs');
const { machineName } = require('./utils');

module.exports = ({ name, description, price}) => {
    fs.writeFile(`./products/${machineName(name)}.json`, JSON.stringify({ name, description, price: parseFloat(price).toFixed(2)}), (err) => {
        if (err) {
            return console.log(err);
        }
    });
}