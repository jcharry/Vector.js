/* global describe it beforeEach */
import chai from 'chai';
import vector, {Vector} from '../../src/math/Vector.js';

chai.expect();
const expect = chai.expect;

describe('Vector.js', () => {
    let v1, v2;
    beforeEach(function() {
        v1 = vector(10, 20);
        v2 = vector(20, 30);
    });

    it('should exist', () => {
        expect(vector).to.exist;
        expect(Vector).to.exist;
    });

    it('should instantiate new vectors', () => {
        expect(v1.x).to.equal(10);
        expect(v1.y).to.equal(20);
    });

    it('should compute dot product using both instance methods and static methods', () => {
        expect(v1.dot(v2)).to.equal(800);
        expect(Vector.dot(v1, v2)).to.equal(800);
    });

    it('should return a new vector for all static methods', () => {
        expect(Vector.add(v1, v2)).to.be.an.instanceof(Vector);
        expect(Vector.subtract(v1, v2)).to.be.an.instanceof(Vector);
        expect(Vector.multiply(v1, v2)).to.be.an.instanceof(Vector);
    });

    it('should compute magnitude', () => {
        expect(v1.magnitude()).to.equal(Math.sqrt(500));
    });

    it('should project vector A onto B', () => {
        expect('todo').to.equal('todo');
    });
});
