const program = require('commander');
const { prompt } = require('inquirer');

const { addProduct, listProducts } = require('./src');

const addProducPrompts = [
    {
        type : 'input',
        name : 'name',
        message : 'Enter product name ...'
    },
    {
        type : 'input',
        name : 'description',
        message : 'Enter product description ...'
    },
    {
        type : 'input',
        name : 'price',
        message : 'Enter product price ...'
    },
];

program
  .version('1.0.0')
  .description('Product management system');

program
  .command('addProduct')
  .alias('a')
  .description('Add a product')
  .action(() => {
      prompt(addProducPrompts).then(
          answers => addProduct(answers)
        );
  });

program
  .command('listProducts')
  .alias('l')
  .description('List products')
  .action(() => listProducts());

program.parse(process.argv);