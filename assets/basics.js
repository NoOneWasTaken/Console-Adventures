const kl = require('kleur');
const prompt = require('prompts');
const randomWords = require('random-words');

const stdin = process.openStdin()
  .setRawMode(true);
require('tty')

function killProcess() {
  stdin.on('keypress', function (chuck, key) {
    if (key && key.ctrl && key.name == 'c') process.exit();
  });
}

async function Ending() {
  const validator = 'continue';

  while (true) {
    const InputField = await prompt({
      type: 'text',
      name: 'value',
      message: 'Type Continue to play.'
    })
  
    if (InputField.value.toLowerCase() === 'continue') break;
  }
}

module.exports = { killProcess, Ending };