const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

// Define commands
const commands = {
  greet: {
    command: 'greet',
    desc: 'Greet someone',
    builder: (yargs) => {
      return yargs
        .option('name', {
          alias: 'n',
          description: 'The name of the person to greet',
          type: 'string',
          demandOption: true,
        });
    },
    handler: (argv) => {
      console.log(`Hello, ${argv.name}!`);
    },
  },
  sum: {
    command: 'sum',
    desc: 'Sum two numbers',
    builder: (yargs) => {
      return yargs
        .option('x', {
          alias: 'first',
          description: 'The first number',
          type: 'number',
          demandOption: true,
        })
        .option('y', {
          alias: 'second',
          description: 'The second number',
          type: 'number',
          demandOption: true,
        });
    },
    handler: (argv) => {
      console.log(`Sum: ${argv.x} + ${argv.y} = ${argv.x + argv.y}`);
    },
  },
};

// Parse arguments with yargs
const argv = yargs(hideBin(process.argv))
  .command(commands) // Register all commands
  .argv;