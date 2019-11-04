import React from 'react';
import { shallow } from 'enzyme';
import {PageSizeSelect} from './PageSizeSelect';

describe('PageSizeSelect', () => {
  it('should render correctly', () => {
    shallow(<PageSizeSelect
      limit={10}
      onChangeLimit={jest.fn()}
    />);
  });
});
