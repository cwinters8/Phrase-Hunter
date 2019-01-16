/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// start a new game
let game;
$('#btn__reset').click(() => {
    game = new Game();
    game.startGame();
})

 // listen for clicks on all keyboard elements
$('.key').click(e => {
    const key = $(e.target);
    const letter = key.text();
    game.handleInteraction(letter, key);
})

document.addEventListener('keypress', e => {
    const letter = e.key;
    if ($('#overlay').is(':hidden')) {
        const key = $(`.key:contains(${letter})`);
        game.handleInteraction(letter, key);
    } else if (letter === 's') {
        game = new Game();
        game.startGame();
    }
})
