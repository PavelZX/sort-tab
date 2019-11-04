import React from 'react';
import { shallow } from 'enzyme';
import {Table} from './Table';

describe('Table', () => {
  it('should render correctly', () => {
    const objs = [
      {
        "id": 1,
        "make": "Subaru",
        "model": "Justy",
        "year": 1990,
        "package": "XSE",
        "fuelType": "Gas",
        "transmission": "Manual",
        "favorite": false
      },
      {
        "id": 2,
        "make": "Mitsubishi",
        "model": "Precis",
        "year": 1986,
        "package": "XLE",
        "fuelType": "Diesel",
        "transmission": "Auto",
        "favorite": false
      },
      {
        "id": 3,
        "make": "Mazda",
        "model": "B-Series",
        "year": 1987,
        "package": "SE",
        "fuelType": "Diesel",
        "transmission": "Manual",
        "favorite": false
      }
    ];

    shallow(
      <Table
        objs={objs}
        totalCount={100}
        totalPages={10}
        currentPage={0}
        onChangePage={() => {}}
        addFavorite={() => {}}
        onChangeLimit={() => {}}
        limit={'10'}
      />
    );
  });

  it('Empty props.objs', () => {
    shallow(
      <Table
        totalCount={100}
        totalPages={10}
        currentPage={0}
        onChangePage={() => {}}
        addFavorite={() => {}}
        onChangeLimit={() => {}}
        limit={'10'}
      />
    );
  });
});
