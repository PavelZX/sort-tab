import React from 'react';
import { shallow, mount } from 'enzyme';
import List from './List';
import "isomorphic-fetch";
import fetchMock from "fetch-mock";

describe('List', () => {
  it('should render correctly', () => {
    shallow(<List
    />);
  });

  it('Success', () => {
    fetchMock.mock('*', [{
      "id": 3,
      "make": "Mazda",
      "model": "B-Series",
      "year": 1987,
      "package": "SE",
      "fuelType": "Diesel",
      "transmission": "Manual",
      "favorite": false
    }]);
    const wrapper = mount(
      <List/>
    );
    wrapper.instance().handleSort('make');
    wrapper.instance().onChangeLimit({}, { value: 20 });
    wrapper.instance().onSubmitFilter('someFilterTerm');
    wrapper.instance().onChangePage({}, { activePage: 3 });
    wrapper.instance().addFavorite({favorite: false, id: 3});
    fetchMock.restore();
  });

  it('Fail', () => {
    fetchMock.mock('*', {
      status: 404,
      body: {
        message: 'Some error message',
      }
    });
    const wrapper = mount(
      <List/>
    );
    wrapper.instance().handleSort('make');
    wrapper.instance().onChangeLimit({}, { value: 20 });
    wrapper.instance().onSubmitFilter('someFilterTerm');
    wrapper.instance().onChangePage({}, { activePage: 3 });
    wrapper.instance().addFavorite({favorite: false, id: 3});
    fetchMock.restore();
  });
});
