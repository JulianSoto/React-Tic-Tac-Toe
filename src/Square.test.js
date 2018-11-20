import React from 'react';
import Square from './Square.js';
import { shallow } from 'enzyme';

describe('Square', () => {
	it ('expect to have a square class name', () => {
		const wrapper = shallow(<Square value={null} />);
		expect(wrapper.hasClass('square')).toBe(true);
	});

	it ('expect to render value', () => {
		const wrapper = shallow(<Square value={'X'} />);
		expect(wrapper.text('square')).toEqual('X');
	});
})