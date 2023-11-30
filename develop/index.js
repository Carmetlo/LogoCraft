const inquirer = require('inquirer');
const {Triangle, Cirle, Square} = require('./shape');

async function getUserInput() {

}

async function generateSVG(text, textColor, shapeType, shapeColor) {

}

async function run() {
    const getUserInput = await getUserInput();
    await generateSVG(userInput.text, userInput.textColor, userInput.shapeType, userInput.shapeColor);
    console.log('SVG generated!');
}

run();
