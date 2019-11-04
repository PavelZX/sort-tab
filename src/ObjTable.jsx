import React from 'react';
import PropTypes from 'prop-types';
import {Table, Pagination} from 'semantic-ui-react'

import {PageSizeSelect} from './PageSizeSelect.jsx';
import {Row} from "./Row.jsx";
import {TableHeader} from "./TableHeader.jsx";

export const ObjTable = (props) => {
  if (!props.objs) {
    return <React.Fragment/>;
  }
  const objRows = props.objs.map(
    (obj, index) => <Row key={index} obj={obj} addFavorite={props.addFavorite} />
  );
  return (
    <React.Fragment>
      <PageSizeSelect
        limit={props.limit}
        onChangeLimit={props.onChangeLimit}
      />
      Total count: {props.totalCount}.
      <Table celled selectable sortable >
        <TableHeader
          column={props.column}
          direction={props.direction}
          handleSort={props.handleSort}
        />

        <Table.Body>
          {objRows}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='8'>
              <Pagination
                totalPages={props.totalPages}
                activePage={props.currentPage}
                onPageChange={props.onChangePage}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </React.Fragment>
  );
};

ObjTable.propTypes = {
  totalCount: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired,
  onChangeLimit: PropTypes.func.isRequired,
  limit: PropTypes.string.isRequired,
};
