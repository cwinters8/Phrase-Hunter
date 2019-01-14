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
    const key = $(e.target).text();
    game.handleInteraction(key);
})