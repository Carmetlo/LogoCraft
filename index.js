const inquirer = require('inquirer');
const {Triangle, Circle, Square} = require('/lib/shapes');
const path = require ("path");
const fs = require ("fs");
//List of questions for user input
async function getUserInput() {
    const userInput = await inquirer.prompt([
        {
            type: "list",
            name: "shapeType",
            message: "Select your shape",
            choices: [
                "circle",
                "square",
                "triangle"
            ]
        },
        {
            type: "input",
            name: "text",
            message: "Enter 3 characters for your logo",
        },
        {
            type: "input",
            name: "textColor",
            message: "Enter your text color",
        },
        {
            type: "input",
            name: "shapeColor",
            message: "Enter your shape color",
        }

    ])
     return userInput;
}
//Function to generate SVG, based on user input.  Writes to logo.svg in examples folder
async function generateSVG(text, textColor, shapeType, shapeColor) {
    let svgString = "";

    if (shapeType === "circle") {
        const circle = new Circle (text,textColor,shapeColor)
        svgString = circle.render () + circle.insertShape () + circle.insertText () + circle.renderEnd ()
    }
    else if (shapeType === "square") {
        const square = new Square (text,textColor,shapeColor)
        svgString = square.render () + square.insertShape () + square.insertText () + square.renderEnd ()
    }
    else {
        const triangle = new Triangle (text,textColor,shapeColor)
        svgString = triangle.render () + triangle.insertShape () + triangle.insertText () + triangle.renderEnd ()
    }
    fs.writeFileSync(path.join (__dirname,"/examples/","logo.svg"),svgString)
}
//Function to run the program.  Calls getUserInput and generateSVG.
async function run() {
    const userInput = await getUserInput(); 
    await generateSVG(userInput.text, userInput.textColor, userInput.shapeType, userInput.shapeColor);
    console.log('SVG generated!');
}
//Run the program. Use node index.js
run();
