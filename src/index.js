var { boxes } = require('./terminal.js');

function runBoxes() {
    setInterval(boxes, 30);
}

module.exports = function () {
    runBoxes();
}

runBoxes();