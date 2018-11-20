import vectorToMatrix from './vectorToMatrix.js';

describe('Winner', () => {
	it(`expect to convert a vector to a matrix`, () => {
		let board = [null, null, null, null, null, null, null, null, null];
		let compare = [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		];
		expect(vectorToMatrix(board)).toEqual(compare);
	})
});