const chalk = require('chalk');

module.exports = {
    name: 'connected',
    execute () {
        console.log(chalk.green('Connected to the database successfully!'));
    },
};
