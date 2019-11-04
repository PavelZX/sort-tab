import React from 'react';
import {shallow} from 'enzyme';
import {Filter} from './Filter';

describe('Filter', () => {
  it('should render correctly in "debug" mode', () => {
    let filter = '';
    let totalCount = 100;
    let onSubmitFilter = function() {};

    const component = shallow(<Filter
      filter = { filter }
      totalCount = { totalCount }
      onSubmitFilter = { onSubmitFilter }
      debug />);

    expect(component).toMatchSnapshot();

    component.instance().handleOnChange({}, {});
  });
});
