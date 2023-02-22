const kl = require('kleur');
const prompt = require('prompts');
const randomWords = require('random-words');

const storyquest = require('../../assets/storyline.json');
const quest = storyquest.storyquests[0].quests[0];

async function firstOption() {
  console.clear();
  console.log(kl.yellow(quest.actions[0].dialogue));
  console.log(kl.underline().white(quest.actions[0].task));

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
    console.log(kl.cyan(quest.actions[0].complete));
    console.log(kl.yellow(quest.ending[0].title));

    setTimeout(() => {
      console.clear();
      console.log(kl.cyan('Thank You for Playing!\n'))
      console.log(kl.red("This game will be continuing the story, but you can feel free to suggest any quest or storyline on the\ngame's github page."))
      process.exit();
    }, 15000);

  }
}

async function secondOption() {
  console.clear();
  console.log(kl.yellow(quest.actions[1].dialogue));
  console.log(kl.underline().white(quest.actions[1].task));

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
    console.log(kl.cyan(quest.actions[1].complete));
    console.log(kl.yellow(quest.ending[0].title));

    setTimeout(() => {
      console.clear();
      console.log(kl.cyan('Thank You for Playing!\n'))
      console.log(kl.red("This game will be continuing the story, but you can feel free to suggest any quest or storyline on the\ngame's github page."))
      process.exit();
    }, 15000);

  }
}

async function thirdOption() {
  console.clear();
  console.log(kl.yellow(quest.actions[2].dialogue));
  console.log(kl.underline().white(quest.actions[2].task));

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
    console.log(kl.cyan(quest.actions[2].complete));
    console.log(kl.yellow(quest.ending[0].title));

    setTimeout(() => {
      console.clear();
      console.log(kl.cyan('Thank You for Playing!\n'))
      console.log(kl.red("This game will be continuing the story, but you can feel free to suggest any quest or storyline on the\ngame's github page."))
      process.exit();
    }, 15000);

  }
}

function choicePlay(option) {
  switch (option.value) {
    case 1:
      firstOption();
      break;

    case 2:
      secondOption();
      break;

    case 3:
      thirdOption();
      break;
  };
};

module.exports = choicePlay;