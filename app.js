// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

//let state


let correctGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    const correctSpot = getRandomHidingSpot();
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess('shed', correctSpot);
});



treeButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('tree', correctSpot);
    // get a random item to call the 'correct spot'
    //if computer random generated number is equal to the numbered button that the user selected, then the 
    //user won
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
});

boulderButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess ('boulder', correctSpot);
    // get a random item to call the 'correct spot'
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
});


function getRandomHidingSpot() {
    // initialize state
    const hidingPlaces = [
        'tree',
        'shed',
        'boulder'
    ];

    const index = Math.floor(Math.random() * hidingPlaces.length);
    // use the random index above and the array of hidingPlaces to get a random hiding place string
    const randomPlace = hidingPlaces[index];
    // return that random hiding place string
    return randomPlace;
}


function handleGuess(userGuess, correctSpot) {

    // first, right after clicking, we need to remove the emoiji face from the previous hiding place that way we don't end up with more than one emoji face
    // we can do that by removing the .face class from all containers
    if (userGuess === correctSpot) {
        correctGuesses++;
    }
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    // then increment the guesses
    totalGuesses++;
    // then use getElementById and the correctSpot string to grab the appropriate container from the DOM
    let hidingspotEl = document.getElementById(correctSpot + '-container');
    // then add the .face css class to that element so that the face shows up
    hidingspotEl.classList.toggle('face');
    // then if the user guess is correct, increment the correct guesses
    winsEl.textContent = correctGuesses;
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
    // update the DOM to show the new value of wins, losses and total guesses to the user
}  