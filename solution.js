// Bulls and Cows
// Get library for user input
// we need to keep the next line, so we can prompt the user for input
// const prompt = require('prompt-sync')({ sigint: true });

// Test that prompt is working
// let name = prompt('What is your name? ');
// console.log(`User's input is: ${name}`);

// Feel free to edit / remove the line above, this is just to test the package
//  Although we may want to use the user's name for something
// const secret = randomNum();

const prompt = require("prompt-sync")({ sigint: true });
let readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);
const chalk = require("chalk");
let emoji = require("node-emoji");

console.clear();

let secret = randomNum();
// console.log(secret);

// Bulls and Cows Function

let counter = 0;
let counterRemaining = 7;

function bullsAndCows(num) {
  /////////////////////////////////////////////////////

  if (
    checkValidNum(num) === true &&
    checkAllNum(num) === true &&
    checkAllUnique(num) === true
  ) {
    const numToStr = String(num);

    //   const secret = 1234;
    const secArray = [...String(secret)];

    const guess = [...numToStr];
    let counterBull = 0;
    let counterCow = 0;

    const filtering = secArray.map((item) => {
      if (numToStr.includes(item)) {
        return item;
      }
    });

    for (let i = 0; i < guess.length; i++) {
      if (secArray[i] === guess[i]) {
        counterBull++;
        // counter--;
      }
    }

    for (let j = 0; j < filtering.length; j++) {
      if (secArray[j] !== guess[j] && filtering[j] !== undefined) {
        counterCow++;
        // counter--;
      }
    }
    console.log(`--------------------------------------------`);
    console.log(
      `${chalk.yellowBright(counterBull)} bull${
        counterBull > 1 ? "s" : ""
      } ${emoji.get("cow")} and ${chalk.blueBright(counterCow)} cow${
        counterCow > 1 ? "s" : ""
      } ${emoji.get("cow2")}`
    );

    if (counterBull === 0 && counterCow === 0) {
      // console.log(`come'on you can do it better`);
      randomMessageGenerator();
    }
    // console.log(`----------------------------`);
    counter++;
    counterRemaining--;
    console.log(
      `${chalk.green("Attempts Tried:")} ${counter} and ${chalk.red(
        "Attempts Remaining:"
      )} ${counterRemaining}`
    );

    console.log(`--------------------------------------------`);
    if (counterRemaining === 0 && counterBull !== 4) {
      console.clear();
      console.log(
        `${chalk.red.underline.bold(
          "YOU HAVE LOST THE GAME YOU LOSER"
        )} ${emoji.get("skull_and_crossbones")}`
      );
      console.log(`The correct number was: ${secret}`);
      console.log(`--------------------------------------------`);
      playAgain();
    }

    if (counterBull === 4) {
      console.clear();
      console.log(
        `${counterBull} bull${counterBull > 1 ? "s" : ""} ${emoji.get(
          "cow"
        )} and ${counterCow} cow${counterCow > 1 ? "s" : ""} ${emoji.get(
          "cow2"
        )}`
      );
      console.log(`--------------------------------------------`);
      console.log(
        `${chalk.cyan.bold(
          "Congratulations You have guessed correctly: "
        )} ${secret}`
      );
      console.log(
        `with ${chalk.red("Attempts Remaining:")} ${counterRemaining}`
      );

      console.log(`--------------------------------------------`);

      playAgain();
    }
  } else if (checkValidNum(num) === false) {
    console.log("Please enter 4 digits!");
  } else if (checkAllNum(num) === false) {
    console.log(`All values should be numbers!`);
  } else if (checkAllUnique(num) === false) {
    console.log(`All digits should be unique!`);
  }

  //////////////////////////////////////
}

// bullsAndCows();

function checkValidNum(num) {
  const toStr = String(num);
  if (toStr.length === 4) {
    return true;
  }
  return false;
}

function checkAllNum(num) {
  const toStr = String(num);
  const numList = "0123456789";
  for (let i = 0; i < toStr.length; i++) {
    if (!numList.includes(toStr[i])) {
      return false;
    }
  }
  return true;
}

function checkAllUnique(num) {
  const toStr = String(num).split("");

  const result = toStr.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);

  return result.length === toStr.length;
}

//   GENERATE RANDOM NUMBERS FROM ARRAY
function randomNum() {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let counter = 0;
  const totalDigits = 4;
  let random = "";
  while (counter < totalDigits) {
    const idx = Math.ceil(Math.random() * array.length - 1);
    random += array[idx];
    array.splice(idx, 1);
    counter++;
  }

  return random;
}
/////////////////////////////////////////
function randomMessageGenerator() {
  const randomMessage = [
    "C'mon you can do it better",
    "Really??? You cant guess???",
    "What a shame",
    "Oh 0 bulls and 0 cows... feel sorry for you",
    "How you are gonna live with this?",
    "You are a looooooser",
    "Go home and sleep",
    "Step away and let the big boys play",
  ];

  const idx = Math.floor(Math.random() * randomMessage.length);
  console.log(randomMessage[idx]);
}

// randomMessageGenerator();
///////////////////////////////////////
// Play Again
function playAgain() {
  let playAgain = prompt(`Do you want to play again? y/n `); // y or n
  console.log(`--------------------------------------------`);
  if (playAgain === "y") {
    const secret2 = randomNum();
    console.clear();
    console.log(`              \x1b[1m\x1b[32mBulls and Cows\x1b[0m`);
    console.log(`--------------------------------------------`);
    console.log("                 WW\\O O/WW");
    console.log("                   | v |");
    console.log("                   \\o o/");
    console.log("                    ¯¯¯");

    console.log(`--------------------------------------------`);

    console.log("                 =(')~ ");
    console.log("                  (¯¯¯¯)~ ");
    console.log("                  //¯¯\\\\ ");
    console.log(`--------------------------------------------`);

    let input2 = prompt("\x1b[1mGuess the number: ");
    secret = secret2;
    counterRemaining = 7;
    counter = 0;
    bullsAndCows(input2);
  } else if (playAgain === "n") {
    console.clear();
    console.log(`${chalk.green.bold("Thankyou for playing ")}`);
    console.log(`--------------------------------------------`);
    rl.close();
  }
}

// Animating Text

function setTimer() {
  let time = 60;

  const interval = setInterval(() => {
    console.clear();
    // inputFromUser();
    console.log(`${chalk.red("Remaining time:")} ${chalk.green(time--)}`);
  }, 1000);

  setTimeout(() => clearInterval(interval), 62000);
}

// setTimer();

// Taking the input from User using Terminal

//basic:
function inputFromUser() {
  console.log(`              \x1b[1m\x1b[32mBulls and Cows\x1b[0m`);
  console.log(`--------------------------------------------`);
  console.log("                 WW\\O O/WW");
  console.log("                   | v |");
  console.log("                   \\o o/");
  console.log("                    ¯¯¯");

  console.log(`--------------------------------------------`);

  console.log("                 =(')~ ");
  console.log("                  (¯¯¯¯)~ ");
  console.log("                  //¯¯\\\\ ");
  console.log(`--------------------------------------------`);
  rl.setPrompt("\x1b[1mGuess the number: ");
  // console.clear();
  rl.prompt();
  // counter--;
  rl.on("line", function (input) {
    if (
      checkValidNum(input) === true &&
      checkAllNum(input) === true &&
      checkAllUnique(input) === true
    ) {
      // setTimer();
      if (bullsAndCows(input)) {
        //   console.log(`This is the new counter`);

        rl.close();
      }
    } else if (checkValidNum(input) === false) {
      console.log("Please enter 4 digits!");
    } else if (checkAllNum(input) === false) {
      console.log(`All values should be numbers!`);
    } else if (checkAllUnique(input) === false) {
      console.log(`All digits should be unique!`);
    }
  });
}

inputFromUser();

// console.log("=(')~ ");
// console.log(" (¯¯¯¯)~ ");
// console.log(" //¯¯\\\\ ");
// console.log(`--------------------------`);

// console.log("WW\\O O/WW");
// console.log("  | v |");
// console.log("  \\o o/");
// console.log("   ¯¯¯");
// console.log(`--------------------------`);
// // console.log("WW\\O O/WW");
