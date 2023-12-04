class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
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
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
    }
    insertText () {
        return `<text x="10" y="10" fill="${this.textColor}">${this.text}</text>`
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
        return `<text x="10" y="10" fill="${this.textColor}">${this.text}</text>`
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    insertShape () {
        return `<rect x="10" y="10" width="30" height="30" fill="${this.shapeColor}"/>`
    }
    insertText () {
        return `<text x="150" y="150" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = { Triangle, Circle, Square };