// Shape class and subclasses.
class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg">`
    }
    renderEnd () {
        return `</svg>`
    }
}


class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    insertShape () {
        return `<polygon points="75,15 135,135 15,135" fill="${this.shapeColor}"/>`
    }
    insertText () {
        return `<text x="50" y="50" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">${this.text}</text>`
    }

}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    insertShape () {
        return `<circle cx="75" cy="75" r="60" fill="${this.shapeColor}"/>`
    }
    insertText () {
        return `<text x="75" y="75" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    insertShape () {
        return `<rect x="15" y="15" width="50" height="50" fill="${this.shapeColor}"/>`
    }
    insertText () {
        return `<text x="40" y="42" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">${this.text}</text>`
    }
}
// Export the classes.
module.exports = { Triangle, Circle, Square };