const { Triangle, Circle, Square } = require('./shapes');

test('Triangle renders correctly', () => {
    const triangleInstance = new Triangle('test', 'black', 'white');
    const expectedOutput = `<svg xmlns="http://www.w3.org/2000/svg"><polygon points="75,15 135,135 15,135" fill="${triangleInstance.shapeColor}"/><text x="75" y="75" text-anchor="middle" dominant-baseline="middle" fill="${triangleInstance.textColor}">${triangleInstance.text}</text></svg>`;
    expect(triangleInstance.render() + triangleInstance.insertShape() + triangleInstance.insertText() + triangleInstance.renderEnd()).toBe(expectedOutput);
});

test('Circle renders correctly', () => {
    const circleInstance = new Circle('test', 'black', 'white');
    const expectedOutput = `<svg xmlns="http://www.w3.org/2000/svg"><circle cx="75" cy="75" r="60" fill="${circleInstance.shapeColor}"/><text x="75" y="75" text-anchor="middle" dominant-baseline="middle" fill="${circleInstance.textColor}">${circleInstance.text}</text></svg>`;
    expect(circleInstance.render() + circleInstance.insertShape() + circleInstance.insertText() + circleInstance.renderEnd()).toBe(expectedOutput);
});

test('Square renders correctly', () => {
    const squareInstance = new Square('test', 'black', 'white');
    const expectedOutput = `<svg xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="30" height="30" fill="${squareInstance.shapeColor}"/><text x="75" y="75" text-anchor="middle" dominant-baseline="middle" fill="${squareInstance.textColor}">${squareInstance.text}</text></svg>`;
    expect(squareInstance.render() + squareInstance.insertShape() + squareInstance.insertText() + squareInstance.renderEnd()).toBe(expectedOutput);
});
