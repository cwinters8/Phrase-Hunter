/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlay = $('#overlay');

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Do or do not there is no try', 'Yoda'),
            new Phrase('Injustice anywhere is a threat to justice everywhere', 'Martin Luther King Jr.'),
            new Phrase('Whatever you do do it well', 'Walt Disney'),
            new Phrase('When words fail music speaks', 'Shakespeare'),
            new Phrase('Knowledge is power', 'Francis Bacon')
        ];
        this.activePhrase = null;
    }

    /**
     * Initializes the game
     */
    startGame() {
        overlay.hide();
        const phrase = this.getRandomPhrase();
        phrase.addPhraseToDisplay();
    }

    /**
     * Randomly retrieves one of the phrases
     * @returns {object} - Phrase object
     */
    getRandomPhrase() {
        const random = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[random];
    }

    /**
     * Controls game logic
     * @param {string} letter - Letter guessed by player
     */
    handleInteraction(letter) {
        
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