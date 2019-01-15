/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Adds letter placeholders to the display when the game starts
     */
    addPhraseToDisplay() {
        const splitPhrase = this.phrase.split('');
        splitPhrase.forEach(letter => {
            let li;
            if (letter === ' ') {
                li = $('<li class="space"> </li>');
            } else {
                li = $(`<li class="hide letter ${letter}">${letter}</li>`);
            }
            $('#phrase ul').append(li);
        })
    }

    /**
     * Checks to see if the letter selected by the player matches a letter in the phrase
     * @param {string} letter - The letter guessed by the player
     * @returns {boolean} - True/false returned based on if the letter was correctly chosen
     */
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Reveals the letter(s) on the board that match the player's selection.
     * @param {string} letter - The letter guessed by the player
     */
    showMatchedLetter(letter) {
        const Letter = $(`.${letter}`);
        Letter.removeClass('hide');
        Letter.addClass('show');
    }
}