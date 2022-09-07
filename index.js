// Bulls and Cows
// Get library for user input
// we need to keep the next line, so we can prompt the user for input
// const prompt = require('prompt-sync')({ sigint: true });

// Test that prompt is working
// let name = prompt('What is your name? ');
// console.log(`User's input is: ${name}`);

// Feel free to edit / remove the line above, this is just to test the package
//  Although we may want to use the user's name for something

function bullsAndCows(num) {
  const numToStr = String(num);
  if (
    checkValidNum(num) === true &&
    checkValidNum(num) === true &&
    checkAllUnique(num) === true
  ) {
    const secret = "4523";
    const secArray = [...secret];
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
  }
}

bullsAndCows(4523);

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
  const toStr = String(num);

  for (let i = 0; i < toStr.length - 1; i++) {
    if (toStr[i] !== toStr[i + 1]) {
      return true;
    }
  }
  return false;
}

// checkAllUnique(1234);

// checkValidNum(1234);
// console.log(`-----------------------------`);
// checkAllNum("a234");
