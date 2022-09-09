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

// const prompt = require("prompt-sync")({ sigint: true });
// let input = prompt("Please guess the Number "); // Note there is a
// console.log(input);

const prompt = require("prompt-sync")({ sigint: true });

function main(num) {
  //   let myInput = prompt(`Guess the Number: `);
  //   console.log("My input: ", myInput);
  bullsAndCows(num);
}

// main();

console.clear();
let secret = randomNum();
console.log(secret);

// Bulls and Cows Function

function bullsAndCows(num) {
  /////////////////////////////////////////////////////

  if (
    checkValidNum(num) === true &&
    checkAllNum(num) === true &&
    checkAllUnique(num) === true
  ) {
    const numToStr = String(num);
    //   console.log(`This is the string ${numToStr}`);
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
    //   animateLetter();
    //   console.clear();
    if (counterBull === 4) {
      console.log(`Congratulations You have guessed correctly ${secret}`);
      let playAgain = prompt(`Do you want to play again? Y/N `); // y or n
      console.log(playAgain);
      if (playAgain === "y") {
        const secret2 = randomNum();
        console.clear();
        console.log(secret2);
        let input2 = prompt(`Guess the number: `); // y or n
        secret = secret2;
        main(input2);
      } else {
        console.log(`Thankyou for playing `);
        rl.close();
      }
    }
  } else if (checkValidNum(num) === false) {
    console.log(`Please enter 4 digits!`);
  } else if (checkAllNum(num) === false) {
    console.log(`All values should be numbers!`);
  } else if (checkAllUnique(num) === false) {
    console.log(`All digits should be unique!`);
  }

  //////////////////////////////////////
  //   const numToStr = String(num);
  //   //   console.log(`This is the string ${numToStr}`);
  //   //   const secret = 1234;
  //   const secArray = [...String(secret)];

  //   const guess = [...numToStr];
  //   // console.log(guess);
  //   let counterBull = 0;
  //   let counterCow = 0;

  //   const filtering = secArray.map((item) => {
  //     if (numToStr.includes(item)) {
  //       return item;
  //     }
  //   });

  //   for (let i = 0; i < guess.length; i++) {
  //     if (secArray[i] === guess[i]) {
  //       counterBull++;
  //     }
  //   }

  //   for (let j = 0; j < filtering.length; j++) {
  //     if (secArray[j] !== guess[j] && filtering[j] !== undefined) {
  //       counterCow++;
  //     }
  //   }

  //   console.log(
  //     `${counterBull} bull${counterBull > 1 ? "s" : ""} and ${counterCow} cow${
  //       counterCow > 1 ? "s" : ""
  //     }`
  //   );
  //   //   animateLetter();
  //   //   console.clear();
  //   if (counterBull === 4) {
  //     console.log(`Congratulations You have guessed correctly ${secret}`);
  //     let playAgain = prompt(`Do you want to play again? Y/N `); // y or n
  //     console.log(playAgain);
  //     if (playAgain === "y") {
  //       const secret2 = randomNum();
  //       console.clear();
  //       console.log(secret2);
  //       let input2 = prompt(`Guess the number: `); // y or n
  //       secret = secret2;
  //       main(input2);
  //     } else {
  //       console.log(`Thankyou for playing `);
  //       rl.close();
  //     }
  //   }
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

// function checkAllNum(num) {
//   const toStr = String(num);
//   const numList = "0123456789";
//   for (let i = 0; i < toStr.split("").length; i++) {
//     if (numList.includes(toStr[i])) {
//       return true;
//     }
//     return false;
//   }
// }

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
    // console.log(array);
    array.splice(idx, 1);
    counter++;
  }

  return random;
}

// Animating Text

function animateLetter() {
  let string = "";
  // console.log(this)

  const interval = setInterval(() => {
    console.clear();
    string += " ";
    console.log(string + "a");
  }, 200);

  setTimeout(() => clearInterval(interval), 8000);
}

// Taking the input from User using Terminal

//basic:
let readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("Guess the number: ");
// console.clear();
rl.prompt();
rl.on("line", function (input) {
  if (
    checkValidNum(input) === true &&
    checkAllNum(input) === true &&
    checkAllUnique(input) === true
  ) {
    if (bullsAndCows(input)) {
      rl.close();
    } else {
      //   console.log(input);
    }
  } else if (checkValidNum(input) === false) {
    console.log(`Please enter 4 digits!`);
  } else if (checkAllNum(input) === false) {
    console.log(`All values should be numbers!`);
  } else if (checkAllUnique(input) === false) {
    console.log(`All digits should be unique!`);
  }
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

// rl.question("Are you sure you want to exit?(y/N)", (answer) => {
//   if (answer.match(/^y(es)?$/i)) {
//     rl.close();
//   } else {
//     rl.prompt(true);
//   }
// });
