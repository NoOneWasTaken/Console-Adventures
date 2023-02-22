const kl = require('kleur');
const prompt = require('prompts');
const randomWords = require('random-words');
const storyquest = require('../../assets/storyline.json');

const Continue = require('../../prompts/Continue');
const quest = storyquest.storyquests[0].quests[0];
const { killProcess } = require('../../assets/basics');
const choicePlay = require('./farming.options');

killProcess();

function getChoices(n) {
  let choices = [];

  for (let i = 0; i <= 2; i++) {
    choices.push({ title: n.actions[i].title, value: i+1 })
  }

  return choices;
}

async function FamingQuest() {
  console.log(kl.cyan().underline('QUEST:') + kl.underline().green(quest.title));
  console.log(kl.red(quest.time));
  console.log(kl.yellow(quest.dialogueFirst));
  
  console.log(kl.underline().white("\n\nHelp Al harvesting these potatoes by typing these worlds:"));

  const words = randomWords({ min: 5, max: 10 }).toString().split(',').join(' ');
  console.log(kl.bgWhite().cyan(`${words}\n`));

  var check = false;

  while (true) {
    var message = "Type these words...";

    const InputField = await prompt({
      type: 'text',
      name: 'value',
      message: message
    })

    if (InputField.value === words) {
      check = true;
      break;
    }
    else message = "Incorrect try again :("
  }

  if (check) {
    console.clear();

    console.log(kl.cyan('Great Job!'))
    console.log(kl.yellow(quest.dialogueSecond))
    
    const ChooseOption = await prompt({
      type: 'select',
      name: 'value',
      message: quest.dialogueThird,
      choices: getChoices(quest),
      hint: 'Each option has different story and gameplay.'
    })

    choicePlay(ChooseOption);
  };
  
};

module.exports = FamingQuest;