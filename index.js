const prompt = require('readline-sync');

const selectionList = [' Felix', ' Mickey', ' Woody', ' Betty'];
const maxGuess = 1;
let currentGuess = 0;
const randomPerson = selectionList[Math.floor(Math.random() * selectionList.length)]

const playAgain = () => {
    let playQuestion = prompt.question('Do you want to play again? y || n \n');
    if(playQuestion === 'y'){
        const randomPerson = selectionList[Math.floor(Math.random() * selectionList.length)];
        let newGuess = prompt.question(
        `Who stole the cookie from the cookie jar?\n`
        );
        oneGuess(newGuess)
    } else {
        console.log('Thanks for playing. \nGoodbye.')
    }
};

let peopleData = [
    {
      name: "Felix",
      age: 15,
      animal: "cat",
      story: "Was outside riding my bike all afternoon."
    },
    {
      name: "Mickey",
      age: 21,
      animal: "mouse",
      story: "Just got home from the grocery store."
    },
    {
      name: "Woody",
      age: 18,
      animal: "bird",
      story: "Was watching TV in the living room."
    },
    {
      name: "Betty",
      age: 24,
      animal: "human",
      story: "Was in my room reading."
    }
  ];


let introTale = prompt.question(
    'Who stole the cookies from the cookie jar?\n Press enter to start.'
)

let gameTale = prompt.question(
    'We have four suspects. \n Press enter to see who the suspects are. \n'
  );


const getSelectionList = () => {
    return selectionList.forEach(item => item)
}

console.log(`The four suspects are:${selectionList}.\n`)

let maxNumberOfTries = 4
    let infoQuestion = prompt.question('Would you like information on the suspects? y || n\n')
    if (infoQuestion === 'y') {
        let userInfo = prompt.question('Who would you like more information on? You can only choose one.\n')
            if(userInfo === 'Felix') {
                console.log(userInfo)
                console.log(peopleData.filter(item => item.name === userInfo))
            } else if(userInfo === 'Mickey') {
                console.log(userInfo)
                console.log(peopleData.filter(item => item.name === userInfo))
            } else if(userInfo === 'Woody') {
                console.log(userInfo)
                console.log(peopleData.filter(item => item.name === userInfo))
            } else if(userInfo === 'Betty') {
                console.log(userInfo)
                console.log(peopleData.filter(item => item.name === userInfo))
            }
        }
    else if (infoQuestion === 'n') {
            let readyGuess = prompt.question('Ready to make your guess? y || n \n')
            if (readyGuess === 'y') {
                    function oneGuess(userGuess) {
                        for (let guesses = 0; guesses < maxGuess; guesses++){
                            if (userGuess === randomPerson) {
                                console.log ("Caught 'em");
                                playAgain();
                            } else if (userGuess !== randomPerson) {
                                console.log ("Oops. It seems the cookie monster got away");
                                 playAgain();
                        }
                        }
                    }
            } else if (readyGuess === 'n') {
                return;
            }
            }

let userGuess = prompt.question('Who stole the cookie from the cookie jar?\n')

function oneGuess(userGuess) {
    for (let guesses = 0; guesses < maxGuess; guesses++){
        if (userGuess == randomPerson) {
            console.log ("Caught 'em");
            playAgain();
        }
        else if (userGuess != randomPerson) {
            console.log ("Oops. It seems the cookie monster got away");
            playAgain();
        }
    }
}

oneGuess();
