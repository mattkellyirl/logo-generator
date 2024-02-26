const { Circle, Triangle, Square, generateLogo } = require('./generateLogo');

describe('Shape Tests', () => {
    describe('Circle', () => {
        it('Should create a black circle svg', () => {
            const testCircle = new Circle('black', 'white', 'tst');
            expect(testCircle.renderShape()).toEqual('<circle cx="150" cy="150" r="75" fill="black"/>');
        });
    });
  
    describe('Triangle', () => {
        it('Should create a black triangle svg', () => {
            const testTriangle = new Triangle('black', 'white', 'tst');
            expect(testTriangle.renderShape()).toEqual(`<polygon points="150,50 100,150 200,150" fill="black"/>`);
        });    
    });
  
    describe('Square', () => {
        it('Should create a black square svg', () => {
            const testSquare = new Square('black', 'white', 'tst');
            expect(testSquare.renderShape()).toEqual(`<rect x="25%" y="25%" width="50%" height="50%" fill="black"/>`);
        });    
    });
});