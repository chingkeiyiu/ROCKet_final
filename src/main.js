/*
Name :Ching Kei Yiu
Project name: YINYANG
date: 5/30
time take : more than 10 hr


Implement a simultaneous two-player mode (30)
Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20)
Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
Add your own (copyright-free) background music to the Play scene (5)
Track a high score that persists across scenes and display it in the UI (5)
Display the time remaining (in seconds) on the screen (10)
Create a new title screen (e.g., new artwork, typography, layout) (10)
Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
Allow the player to control the Rocket after it's fired (5)


*/


let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height /15;
let borderPadding = borderUISize /3;

// reserve keyboard variables
let keyW, keyR, keyLEFT, keyRIGHT,keyUP,keyF,keyA,keyD;
