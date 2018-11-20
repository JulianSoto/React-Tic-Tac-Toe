//board test
import React from 'react';
import Board from './Board.js';
import { shallow } from 'enzyme';

describe('Board', () => {
	it ('should match snapshot', () => {
		const wrapper = shallow(<Board squares={Array(9).fill(null)}/>);
		expect(wrapper).toMatchSnapshot();
	})
})