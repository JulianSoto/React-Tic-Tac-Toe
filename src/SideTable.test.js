import React from 'react';
import { shallow } from 'enzyme';
import SideTable from './SideTable.js';

describe('SideTable', () => {
	it('should match snapshot', () => {
		const wrapper = shallow(<SideTable/>);
		expect(wrapper).toMatchSnapshot();
	})
})