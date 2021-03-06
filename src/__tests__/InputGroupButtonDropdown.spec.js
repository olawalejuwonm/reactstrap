import React from 'react';
import { shallow } from 'enzyme';
import { InputGroupButtonDropdown, Dropdown } from '../';

describe('InputGroupButtonDropdown', () => {
  it('should render Dropdown', () => {
    const wrapper = shallow(<InputGroupButtonDropdown addonType="prepend">Yo!</InputGroupButtonDropdown>);

    expect(wrapper.type()).toBe(Dropdown);
  });
});
