const path = require('path');
const fs = require('fs');
const { machineName } = require('./utils');

const folderPath = path.join(__dirname, '../products');

module.exports = () => {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            return console.log(`Unable to find products: ${err}`);
        }

        files.forEach((file) => {
            fs.readFile(`${folderPath}/${file}`, (err, data) => {
                if (err) {
                    return console.log(`error while parsing product file: ${err}`);
                }

                product = JSON.parse(data);
                console.log(`Product name: ${product.name}`);
                console.log(`Product description: ${product.description}`);
                console.log(`Product price: ${product.price}`);
                console.log(`-------------------------------`);
            });
        });
    });
}