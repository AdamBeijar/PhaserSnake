// maina.js
var game;
game = new Phaser.Game(600, 450, Phaser.AUTO, 'SnakeGame');
game.state.add('Menu', menu);
game.state.add('Game', Game);
game.state.add('Game_Over', Game_Over);
game.state.start('Menu');