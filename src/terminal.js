var Canvas = require('drawille');
var line = require('bresenham');
var keypress = require('keypress');
var clear = require('clear');

var c = new Canvas(200, 150);
var paddleX = 50,
    paddleY = c.height - 15;

// Block's spawnpoint
var blockX = Math.floor(c.width / 3),
    blockY = Math.floor(c.height / 3);

// Apple's spawpoint
var appleX = Math.floor(c.width * Math.random()),
    appleY = Math.floor(c.height * Math.random());

var score = 0;
var status = 1;
var speed = 1;

var up = false,
    down = false,
    left = false,
    right = false;

var blockSize = 5;
var appleSize = 2;

var threshold = 5;


module.exports = {
    breakout: function () {

        c.clear();
        clear();

        // border
        line(0, 0, c.width - 1, 0, c.set.bind(c));
        line(0, 0, 0, c.height - 1, c.set.bind(c));
        line(c.width - 1, c.height - 1, 0, c.height - 1, c.set.bind(c));
        line(c.width - 1, c.height - 1, c.width - 1, 0, c.set.bind(c));

        // paddle
        line(paddleX, paddleY, paddleX + 20, paddleY, c.set.bind(c));
        line(paddleX + 20, paddleY, paddleX + 20, paddleY + 5, c.set.bind(c));
        line(paddleX + 20, paddleY + 5, paddleX, paddleY + 5, c.set.bind(c));
        line(paddleX, paddleY + 5, paddleX, paddleY, c.set.bind(c));

        if (status == 1) {

            // block
            line(blockX, blockY, blockX + 3, blockY, c.set.bind(c));
            line(blockX + 3, blockY, blockX + 3, blockY + 3, c.set.bind(c));
            line(blockX + 3, blockY + 3, blockX, blockY + 3, c.set.bind(c));
            line(blockX, blockY + 3, blockX, blockY, c.set.bind(c));

            blockX++;
            blockY++;

            if (blockX >= c.height - 20) {
                status = 0;
            }
        } else {
            // draw no block...
        }

        process.stdout.write(c.frame());
        console.log("  -----------\n", "| Score: " + score + "  |" + "\n  -----------");        
    },
    boxes: function () {
        c.clear();
        clear();

        // border
        line(0, 0, c.width - 1, 0, c.set.bind(c));
        line(0, 0, 0, c.height - 1, c.set.bind(c));
        line(c.width - 1, c.height - 1, 0, c.height - 1, c.set.bind(c));
        line(c.width - 1, c.height - 1, c.width - 1, 0, c.set.bind(c));

        // snake  
        line(blockX, blockY, blockX + blockSize, blockY, c.set.bind(c));
        line(blockX + blockSize, blockY, blockX + blockSize, blockY + blockSize, c.set.bind(c));
        line(blockX + blockSize, blockY + blockSize, blockX, blockY + blockSize, c.set.bind(c));
        line(blockX, blockY + blockSize, blockX, blockY, c.set.bind(c));

        if (up == true) blockY -= speed;
        if (down == true) blockY += speed;
        if (left == true) blockX -= speed;
        if (right == true) blockX += speed;

        if (blockX > c.width - blockSize) blockX -= speed;
        if (blockY > c.height - blockSize) blockY -= speed;
        if (blockX < 1) blockX += speed;
        if (blockY < 1) blockY += speed;

        if (status == 1) {
            // draw apple 
            line(appleX, appleY, appleX + appleSize, appleY, c.set.bind(c));
            line(appleX + appleSize, appleY, appleX + appleSize, appleY + appleSize, c.set.bind(c));
            line(appleX + appleSize, appleY + appleSize, appleX, appleY + appleSize, c.set.bind(c));
            line(appleX, appleY + appleSize, appleX, appleY, c.set.bind(c));
        }

        var dx = appleX - blockX;
        var dy = appleY - blockY;
        var dist = Math.sqrt((dx * dx) + (dy * dy));

        // if (blockX == appleX && blockY == appleY) {
        if (dist < threshold) {
            status = 0;
            score++;
            appleX = Math.floor(c.width * Math.random());
            appleY = Math.floor(c.height * Math.random());
            setTimeout(function () {
                status = 1;
            }, 200);
        }

        // process.stdout.write(c.frame());
        console.log(c.frame());
        console.log("  -----------\n", "| Score: " + score + "  |" + "\n  -----------");
        // console.log(appleX, appleY);
    }
}

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
    switch (key.name) {
        case 'left':
            right = false;
            up = false;
            down = false;
            left = true;
            paddleX -= 10;
            if (paddleX <= -5) {
                paddleX += 10
            }
            break;
        case 'right':
            right = true;
            up = false;
            down = false;
            left = false;
            paddleX += 10;
            if (paddleX >= c.width - 15) {
                paddleX -= 10;
            }
            break;
        case 'up':
            right = false;
            up = true;
            down = false;
            left = false;
            paddleY -= 10;
            if (paddleY <= 1) {
                paddleY += 10
            }
            break;
        case 'down':
            right = false;
            up = false;
            down = true;
            left = false;
            paddleY += 10;
            if (paddleY >= c.height - 5) {
                paddleY -= 10
            }
            break;
        case 'space':
            right = false;
            up = false;
            down = false;
            left = false;
            break;
    }
});
process.stdin.setRawMode(true);
process.stdin.resume()
