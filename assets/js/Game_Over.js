var Game_Over = {
    preload : function() {
        // Load all the needed resources for the menu.
        game.load.image('Game_Over', './assets/images/gameover.png');
    },
    create: function () {
        // Add menu screen.
        // It will act as a button to start the game.
        this.add.button(0, 0, 'Game_Over', this.startGame, this);
        var style = { font: "30px Arial", fill: "#ffffff", align: "center" };
        var text = game.add.text(game.world.centerX, game.world.centerY, "Your score was " + score, style);
        text.anchor.set(0.5);
    },
    startGame: function () {
        // Change the state to the actual game.
        this.state.start('Game');
    }
};