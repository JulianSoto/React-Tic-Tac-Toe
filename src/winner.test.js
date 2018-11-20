import winner from './winner.js';

describe('Winner', () => {
	it(`expect to be null`, () => {
		let board = [[null, null, null],[0, 1, 1],[null, null, null]];
		expect(winner(board)).toBe(null);
	})

	it(`should return winner's ID 0`, () => {
		let board = [[0, 0, 0],[null, null, null],[null, null, null]];
		expect(winner(board)).toBe(0);
	})

	it(`should return winner's ID 1`, () => {
		let board = [[null, null, null],[1, 1, 1],[null, null, null]];
		expect(winner(board)).toBe(1);
	})

	it(`should return winner's ID 0`, () => {
		let board = [[null, null, null],[null, null, null],[0, 0, 0]];
		expect(winner(board)).toBe(0);
	})

	it(`should return winner's ID 1`, () => {
		let board = [[1, null, null],[1, null, null],[1, null, null]];
		expect(winner(board)).toBe(1);
	})

	it(`should return winner's ID 0`, () => {
		let board = [[null, 0, null],[null, 0, null],[null, 0, null]];
		expect(winner(board)).toBe(0);
	})

	it(`should return winner's ID 1`, () => {
		let board = [[null, null, 1],[null, null, 1],[null, null, 1]];
		expect(winner(board)).toBe(1);
	})

	it(`should return winner's ID 0`, () => {
		let board = [[null, 0, null],[null, 0, null],[null, 0, null]];
		expect(winner(board)).toBe(0);
	})

	it(`should return winner's ID 1`, () => {
		let board = [[null, null, 1],[null, null, 1],[null, null, 1]];
		expect(winner(board)).toBe(1);
	})

	it(`detects diagonals`, () => {
		let board = [[0, null, null],[null, 0, null],[null, null, 0]];
		expect(winner(board)).toBe(0);
	})

	it(`should detect diagonals`, () => {
		let board = [[null, null, 1],[null, 1, null],[1, null, null]];
		expect(winner(board)).toBe(1);
	})
})