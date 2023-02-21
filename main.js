const kl = require('kleur');
const prompt = require('prompts');
const storyquest = require('./assets/storyline.json');

let story = storyquest.storyquests[0];

console.clear();
console.log(kl.cyan().bold('\tConsole Adventures'));

// Menu Function
(async () => {
  const menu = await prompt({
    type: 'select',
    name: 'options',
    message: 'Hello Traveler! Welcome to Console Adventures.\n-If you want to start playing, select the play option.\n-If you want to exit, select the exit option.',
    choices: [ { title: "Play!", value: 'play' }, { title: "Exit...", value: 'exit' } ]
  });

  if (menu.options == 'play') {
    console.clear();
    setTimeout(() => {
      console.log(kl.underline().green(story.act_one.title));
      console.log(kl.red(story.act_one.time));
      console.log(kl.yellow(story.act_one.dialogue));
    }, 1000)
  } else process.exit();

  setTimeout(async () => {
    const startAutoQuest = await prompt({
      type: 'toggle',
      name: 'next',
      message: 'Continue? (Choose No to exit the game)',
      initial: true,
      active: 'Yes',
      inactive: 'No',
    });

    if (startAutoQuest.next == true)
      console.clear();
    else
      process.exit();
  }, 6000)
})();

(async () => {
  const questOne = story.act_one.quest_one;

  
})();