import AI from './AI.js';

describe('AI works', () => {
	it('should return null if draw', () => {
		let board = [
			[   0,    1,    0],
			[   1,    0,    1],
			[   1,    0,    1]
		];

		expect(AI(board)).toEqual(null);
	})


	it('should blocks opponent', () => {
		let board = [
			[   1, null, null],
			[null,    0, null],
			[null,    0,    1]
		];

		expect(AI(board)).toEqual({i: 0, j: 1});
	})

	it('should win for AI', () => {
		let board = [
			[   1,    1, null],
			[null, null, null],
			[   0, null,    0]
		];

		expect(AI(board)).toEqual({i: 0, j: 2});
	})

	it('blocks opponent winning', () => {
		let board = [
			[   1, null, null],
			[   0,    0, null],
			[null, null, null]
		];

		expect(AI(board)).toEqual({i: 1, j: 2});
	})
})