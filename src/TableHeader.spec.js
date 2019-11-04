import React from 'react';
import {mount, shallow} from 'enzyme';
import {TableHeader} from './TableHeader';
import {Table} from "semantic-ui-react";

describe('TableHeader', () => {
  it('should render correctly', () => {
    shallow(<TableHeader
      handleSort={jest.fn()}
    />);
  });

  it('Column Header On Click', () => {
    const wrapper = mount(
      <Table>
        <TableHeader
          handleSort={jest.fn()}
          column={'id'}
        />
      </Table>
    );
    wrapper.find(Table.HeaderCell).forEach(
      (node) => {
        node.simulate('click');
      }
    )
  });

  it('Sorted Column', () => {
    const columns = [
      "id",
      "make",
      "model",
      "year",
      "package",
      "fuelType",
      "transmission",
      "favorite"
    ];

    columns.forEach((column) => {
      shallow(
        <Table>
          <TableHeader
            column={column}
            direction={'ascending'}
          />
        </Table>
      );
    });
  });
});
