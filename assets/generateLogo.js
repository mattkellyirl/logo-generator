const fs = require('fs');

class Shape {
    constructor(shapeColor, charColor, chars) {
        if (!shapeColor || !charColor || !chars) {
            throw new Error('Please enter values in all fields.');
        };

        this.shapeColor = shapeColor;
        this.charColor = charColor;
        this.chars = chars;
    };
};

class Triangle extends Shape {
    renderShape() {
        return `<polygon points="150,50 100,150 200,150" fill="${this.shapeColor}"/>`;
    };
};

class Circle extends Shape {
    renderShape() {
        return `<circle cx="150" cy="150" r="75" fill="${this.shapeColor}"/>`;
    };
};

class Square extends Shape {
    renderShape() {
        return `<rect x="25%" y="25%" width="50%" height="50%" fill="${this.shapeColor}"/>`;
    };
};

function createShape(response) {
    switch (response.shape) {
        case 'Circle':
            return new Circle(response.shapeColor, response.charColor, response.chars);
        case 'Triangle':
            return new Triangle(response.shapeColor, response.charColor, response.chars);
        case 'Square':
            return new Square(response.shapeColor, response.charColor, response.chars);
        default:
            throw new Error("Please choose a valid background shape (eg circle, triangle or square).");
    };
};

function generateLogo(response) {
    const shape = createShape(response);

    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.renderShape()}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${response.charColor}" font-size="30">
            ${response.chars.toUpperCase()}
        </text>
    </svg>`;

    fs.writeFile('logo.svg', svgContent, (err) => {
        err ? console.error('Error writing to logo.svg') : console.log('Generated logo.svg');
    });
};
module.exports = { Circle, Triangle, Square, generateLogo };
// module.exports = generateLogo;