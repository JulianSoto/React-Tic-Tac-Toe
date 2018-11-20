import React from 'react';
import { shallow } from 'enzyme';
import SideTable from './SideTable.js';

import Game from './Game';

describe('Game component', () => {
	it('expect to match snapshot', () => {
		const wrapper = shallow(<Game />);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should contain a side table', () => {
		const wrapper = shallow(<Game />);
		expect(wrapper.find('.side-table').exists()).toBe(true);
	});

	it(`Shouldn't contain a board`, () => {
		const wrapper = shallow(<Game />);
		expect(wrapper.find('.board').exists()).toBe(false);
	});

	it(`Should contain a board when players is set in state`, () => {
		const wrapper = shallow(<Game />);
		wrapper.setState({players: ['X', 'O']});
		expect(wrapper.find('.board').exists()).toBe(true);
	});
});