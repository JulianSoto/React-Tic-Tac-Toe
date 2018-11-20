import React from 'react';
import { shallow } from 'enzyme';
import Status from './StatusMessage.js';

describe('Status Message', () => {
	it('render message correctly', () => {
		const wrapper = shallow(<Status winner={null} isDraw={true}/>);
		expect(wrapper.find('span').text()).toBe(`It's a draw`);
	})
})