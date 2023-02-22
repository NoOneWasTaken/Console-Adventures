const kl = require('kleur');
const prompt = require('prompts');
const Coutinue = require('./Continue');
const storyquest = require('../assets/storyline.json');

let story = storyquest.storyquests[0];

async function MainMenu() {
  console.clear();
  console.log(kl.cyan().bold().underline('\tConsole Adventures'));


  const menu = await prompt({
    type: 'select',
    name: 'options',
    message: 'Hello Traveler! Welcome to Console Adventures.\n-If you want to start playing, select the play option.\n-If you want to exit, select the exit option.',
    choices: [{ title: "Play!", value: 'play' }, { title: "Exit...", value: 'exit' }]
  });

  if (menu.options == 'play') {
    console.clear();

    console.log(kl.underline().green(story.title));
    console.log(kl.red(story.time));
    console.log(kl.yellow(story.dialogue));
  } else process.exit();

  setTimeout(() => Coutinue(), 5000);
};

module.exports = MainMenu;