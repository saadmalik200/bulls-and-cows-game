// Bulls and Cows
// Get library for user input
// we need to keep the next line, so we can prompt the user for input
// const prompt = require('prompt-sync')({ sigint: true });

// Test that prompt is working
// let name = prompt('What is your name? ');
// console.log(`User's input is: ${name}`);

// Feel free to edit / remove the line above, this is just to test the package
//  Although we may want to use the user's name for something
const secret = randomNum();

function bullsAndCows(num) {
  console.clear();
  const numToStr = String(num);
  //   const secret = 1234;
  const secArray = [...String(secret)];

  const guess = [...numToStr];
  // console.log(guess);
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
    }
  }

  for (let j = 0; j < filtering.length; j++) {
    if (secArray[j] !== guess[j] && filtering[j] !== undefined) {
      counterCow++;
    }
  }

  console.log(
    `${counterBull} bull${counterBull > 1 ? "s" : ""} and ${counterCow} cow${
      counterCow > 1 ? "s" : ""
    }`
  );
  //   console.clear();
  if (counterBull === 4) {
    console.log(`Congratulations You have guessed correctly ${secret}`);
    // return true;
    //   return `Do you want to play again ?`;
  }
}
// console.clear();
// }

// bullsAndCows();

function checkValidNum(num) {
  const toStr = String(num);
  if (toStr.length === 4) {
    return true;
  }
}

function checkAllNum(num) {
  const toStr = String(num);
  const numList = "0123456789";
  for (let i = 0; i < toStr.split("").length; i++) {
    if (numList.includes(toStr[i])) {
      return true;
    } else {
      return false;
      //   console.log(`The number is not there ${toStr[i]}`);
    }
  }
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

function randomNum() {
  //   const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //   let randomIndex1;
  //   let randomDigit = "";

  //   for (let i = 0; i < arr.length; i++) {
  //     randomIndex1 = Math.ceil(Math.random() * arr.length - 1);
  //     if (!randomDigit.includes(randomIndex1) && randomDigit.length !== 4) {
  //       randomDigit += randomIndex1;
  //     }
  //   }
  //   return randomDigit;

  //   GENERATE RANDOM NUMBERS FROM ARRAY

  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let counter = 0;
  const totalDigits = 4;
  let random = "";
  while (counter < totalDigits) {
    const idx = Math.ceil(Math.random() * array.length - 1);
    random += array[idx];
    // console.log(array);
    array.splice(idx, 1);
    counter++;
  }

  return random;
}

//basic:
let readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("Guess the number: ");
console.clear();
rl.prompt();
rl.on("line", function (input) {
  if (
    checkValidNum(input) === true &&
    checkAllNum(input) === true &&
    checkAllUnique(input) === true
  ) {
    if (bullsAndCows(input)) {
      //   console.log(input);
      rl.close();
    } else {
      //   console.log(`Please Enter the Valid Number`);
      console.log(input);
      //   console.clear();
    }
    // console.clear();
  }
  //   rl.prompt();
});

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
