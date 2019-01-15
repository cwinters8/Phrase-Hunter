/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlay = $('#overlay');

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Once in a blue moon'),
            new Phrase('Piece of cake'),
            new Phrase('The best of both worlds'),
            new Phrase('Speak of the devil'),
            new Phrase('Knowledge is power')
        ];
        this.activePhrase = null;
    }

    /**
     * Initializes the game
     */
    startGame() {
        overlay.hide();
        // reset the game
        $('#phrase ul').empty();
        $('.key').removeClass('chosen').removeClass('wrong').removeAttr('disabled');
        $('#scoreboard img[src="images/lostHeart.png"]').attr('src', 'images/liveHeart.png');

        // add a new phrase
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
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
     * @param {object} key - Key jQuery DOM object
     */
    handleInteraction(letter, key) {
        // disable key
        key.attr('disabled', 'disabled');
        // validate guess
        const check = this.activePhrase.checkLetter(letter);
        if (check) {
            this.activePhrase.showMatchedLetter(letter);
            key.addClass('chosen');
            const win = this.checkForWin();
            if (win) {
                this.gameOver('win');
            }
        } else {
            key.addClass('wrong');
            this.removeLife();
        }
    }

    /**
     * Handles incorrect guesses
     */
    removeLife() {
        this.missed++;
        if (this.missed < 5) {
            const lives = $('#scoreboard img[src="images/liveHeart.png"]');
            lives.first().attr('src', 'images/lostHeart.png');
        } else {
            this.gameOver('lose');
        }
    }

    /**
     * Checks to see if the player has revealed all of the letters in the active phrase
     * @returns {boolean}
     */
    checkForWin() {
        if ($('.show, .space').length === this.activePhrase.phrase.length) {
            return true;
        }
    }

    /**
     * Ends the game and displays a win/loss message
     * @param {string} outcome - 'win' or 'lose'
     */
    gameOver(outcome) {
        const message = $('#game-over-message');
        overlay.removeClass('start');
        if (outcome === 'win') {
            message.text('You won!')
            overlay.addClass('win');
        } else {
            message.text('Better luck next time!')
            overlay.addClass('lose');
        }
        overlay.show();
    }
}