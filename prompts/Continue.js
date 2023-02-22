const kl = require('kleur');
const prompt = require('prompts');
const FamingQuest = require('../Quests/ActOne/farming');

async function Coutinue() {
  const startAutoQuest = await prompt({
    type: 'select',
    name: 'next',
    message: 'Continue? (Choose No to exit the game)',
    choices: [
      { "title": "Yes", "value": true },
      { "title": "No", "value": false }
    ]
  });

  if (startAutoQuest.next == true) {
    console.clear();
    FamingQuest();
  }
  else
    process.exit();
};

module.exports = Coutinue;