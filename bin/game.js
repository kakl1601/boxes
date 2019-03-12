#! /usr/bin/env node

var clear = require('clear'); // function for clearing the terminal
var chalk = require('chalk'); // color the output
var figlet = require('figlet'); // create text from ASCII 
var keypress = require('keypress'); // key listener
var { boxes } = require('../src/terminal.js'); //game module


figlet('Kanyas boxes', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    clear();
    console.log(chalk.hex('#f84b60')(data));
    console.log(" ");
    console.log(chalk.hex('#2fcdd9')("Press 'space' to start the game"));
});


function runBoxes() {
    setInterval(boxes, 30);
}

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
    switch (key.name) {
        case 'space':
            runBoxes();
            break;
    }
});
process.stdin.setRawMode(true);
process.stdin.resume();