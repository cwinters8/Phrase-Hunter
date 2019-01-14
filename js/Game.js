/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlay = $('#overlay');

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            {phrase: 'Do or do not there is no try', source: 'Yoda'},
            {phrase: 'Injustice anywhere is a threat to justice everywhere', source: 'MLK Jr'},
            {phrase: 'Whatever you do do it well', source: 'Walt Disney'},
            {phrase: 'When words fail music speaks', source: 'Shakespeare'},
            {phrase: 'Knowledge is power', source: 'Francis Bacon'}
        ];
        this.activePhrase = null;
    }

    /**
     * Initializes the game
     */
    startGame() {
        overlay.hide();
    }

    /**
     * Randomly retrieves one of the phrases
     * @returns {object} - Phrase object
     */
    getRandomPhrase() {

    }

    /**
     * Controls game logic
     * @param {string} letter - Letter guessed by player
     */
    handleInteraction(letter) {
        console.log(`handling interaction of guess ${letter}`);
    }

    /**
     * Handles incorrect guesses
     */
    removeLife() {

    }

    /**
     * Checks to see if the player has revealed all of the letters in the active phrase
     */
    checkForWin() {

    }

    /**
     * Ends the game and displays a win/loss message
     */
    gameOver() {

    }
}