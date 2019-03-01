import { TweenLite } from "gsap";

const { createCanvas, loadImage } = require('canvas');
const canvas = createCanvas(200, 200);
const ctx = canvas.getContext('2d');

export default function gameRun() {

    console.log("Game will be running from here!");
    
    // line(pointX, pointY, pointX + 30, pointY, c.set.bind(c));
    // line(pointX + 30, pointY, pointX + 30, pointY + 10, c.set.bind(c));
    // line(pointX + 30, pointY + 10, pointX, pointY + 10, c.set.bind(c));
    // line(pointX, pointY + 10, 50, 50, c.set.bind(c));

    // K
    // line(pointX, pointY, pointX + 5, pointY, c.set.bind(c));
    // line(pointX + 5, pointY, pointX + 5, pointY + 10, c.set.bind(c));
    // line(pointX + 5, pointY + 10, pointX + 10, pointY, c.set.bind(c));
    // line(pointX + 10, pointY, pointX + 15, pointY, c.set.bind(c));
    // line(pointX + 15, pointY, pointX + 10, pointY + 10, c.set.bind(c));
    // line(pointX + 10, pointY + 10, pointX + 15, pointY + 20, c.set.bind(c));
    // line(pointX + 15, pointY + 20, pointX + 10, pointY + 20, c.set.bind(c));
    // line(pointX + 10, pointY + 20, pointX + 5, pointY + 10, c.set.bind(c));
    // line(pointX + 5, pointY + 10, pointX + 5, pointY + 20, c.set.bind(c));
    // line(pointX + 5, pointY + 20, pointX, pointY + 20, c.set.bind(c));
    // line(pointX, pointY + 20, pointX, pointY, c.set.bind(c));

    // // A 
    // line(pointX + 25, pointY, pointX + 30, pointY, c.set.bind(c));
    // line(pointX + 30, pointY, pointX + 40, pointY + 20, c.set.bind(c));
    // line(pointX + 40, pointY + 20, pointX + 35, pointY + 20, c.set.bind(c));
    // line(pointX + 35, pointY + 20, pointX + 30, pointY + 15, c.set.bind(c));
    // line(pointX + 30, pointY + 15, pointX + 25, pointY + 15, c.set.bind(c));
    // line(pointX + 25, pointY + 15, pointX + 20, pointY + 20, c.set.bind(c));
    // line(pointX + 20, pointY + 20, pointX + 15, pointY + 20, c.set.bind(c));
    // line(pointX + 15, pointY + 20, pointX + 25, pointY, c.set.bind(c));
    // line(pointX + 25, pointY + 10, pointX + 30, pointY + 10, c.set.bind(c));
    // line(pointX + 30, pointY + 10, pointX + 27.5, pointY + 5, c.set.bind(c));
    // line(pointX + 27.5, pointY + 5, pointX + 25, pointY + 10, c.set.bind(c));

    // // N 
    // line(pointX + 40, pointY + 20, pointX + 40, pointY, c.set.bind(c));
    // line(pointX + 40, pointY, pointX + 45, pointY, c.set.bind(c));
    // line(pointX + 45, pointY, pointX + 50, pointY + 10, c.set.bind(c));
    // line(pointX + 50, pointY + 10, pointX + 50, pointY, c.set.bind(c));
    // line(pointX + 50, pointY, pointX + 55, pointY, c.set.bind(c));
    // line(pointX + 55, pointY, pointX + 55, pointY + 20, c.set.bind(c));
    // line(pointX + 55, pointY + 20, pointX + 50, pointY + 20, c.set.bind(c));
    // line(pointX + 50, pointY + 20, pointX + 45, pointY + 10, c.set.bind(c));
    // line(pointX + 45, pointY + 10, pointX + 45, pointY + 20, c.set.bind(c));
    // line(pointX + 45, pointY + 20, pointX + 40, pointY + 20, c.set.bind(c));

    // // Y
    // line(pointX + 55, pointY, pointX + 60, pointY, c.set.bind(c));
    // line(pointX + 55, pointY, pointX + 62.5, pointY + 12.5, c.set.bind(c));
    // line(pointX + 62.5, pointY + 12.5, pointX + 62.5, pointY + 20, c.set.bind(c));
    // line(pointX + 62.5, pointY + 20, pointX + 67.5, pointY + 20, c.set.bind(c));
    // line(pointX + 60, pointY, pointX + 65, pointY + 10, c.set.bind(c));
    // line(pointX + 65, pointY + 10, pointX + 70, pointY, c.set.bind(c));
    // line(pointX + 70, pointY, pointX + 75, pointY, c.set.bind(c));
    // line(pointX + 75, pointY, pointX + 67.5, pointY + 12.5, c.set.bind(c));
    // line(pointX + 67.5, pointY + 12.5, pointX + 67.5, pointY + 20, c.set.bind(c));

    // // A
    // line(pointX + 80, pointY, pointX + 85, pointY, c.set.bind(c));
    // line(pointX + 85, pointY, pointX + 95, pointY + 20, c.set.bind(c));
    // line(pointX + 95, pointY + 20, pointX + 90, pointY + 20, c.set.bind(c));
    // line(pointX + 90, pointY + 20, pointX + 85, pointY + 15, c.set.bind(c));
    // line(pointX + 85, pointY + 15, pointX + 80, pointY + 15, c.set.bind(c));
    // line(pointX + 80, pointY + 15, pointX + 75, pointY + 20, c.set.bind(c));
    // line(pointX + 75, pointY + 20, pointX + 70, pointY + 20, c.set.bind(c));
    // line(pointX + 70, pointY + 20, pointX + 80, pointY, c.set.bind(c));
    // line(pointX + 80, pointY + 10, pointX + 85, pointY + 10, c.set.bind(c));
    // line(pointX + 85, pointY + 10, pointX + 82.5, pointY + 5, c.set.bind(c));
    // line(pointX + 82.5, pointY + 5, pointX + 80, pointY + 10, c.set.bind(c));

}



