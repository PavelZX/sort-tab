import React from "react";
import {Button, Table} from "semantic-ui-react";
import PropTypes from "prop-types";

export const Row = (props) => (
  <Table.Row>
    <Table.Cell>{props.obj.id}</Table.Cell>
    <Table.Cell>{props.obj.make}</Table.Cell>
    <Table.Cell>{props.obj.model}</Table.Cell>
    <Table.Cell>{props.obj.year}</Table.Cell>
    <Table.Cell>{props.obj.package}</Table.Cell>
    <Table.Cell>{props.obj.fuelType}</Table.Cell>
    <Table.Cell>{props.obj.transmission}</Table.Cell>
    <Table.Cell textAlign='center'>
      <Button
        onClick={() => props.addFavorite(props.obj)}
        color={props.obj.favorite? 'google plus' : 'twitter'}
        icon={props.obj.favorite ? 'heart' : 'heart outline'} />
    </Table.Cell>
  </Table.Row>
);

Row.propTypes = {
  obj: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired,
};
