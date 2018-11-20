import isDraw from './isGameDraw.js';

describe('Is draw function', () => {
	it(`expect to return false`, () => {
		let board = [0, 0, 0, 0, 0, 0, 0, 0, null];
		expect(isDraw(board)).toBe(false);
	});
});

describe('Is draw function', () => {
	it(`expect to return true`, () => {
		let board = [1, 1, 1, 1, 1, 1, 1, 1, 1];
		expect(isDraw(board)).toBe(true);
	});
});