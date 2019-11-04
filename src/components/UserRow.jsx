import React from "react";
import {Button, Table} from "semantic-ui-react";
import PropTypes from "prop-types";

export const UserRow = (props) => (


  <Table.Row>
    <Table.Cell>{props.user.id}</Table.Cell>
    <Table.Cell>{props.user.name}</Table.Cell>
    <Table.Cell>{props.user.surname}</Table.Cell>
    <Table.Cell>{props.user.descript}</Table.Cell>
    <Table.Cell textAlign='center'>
      <Button
        onClick={() => props.addFavorite(props.user)}
        color={props.user.favorite? 'google plus' : 'twitter'}
        icon={props.user.favorite ? 'heart' : 'heart outline'} />
    </Table.Cell>
  </Table.Row>
);

UserRow.propTypes = {
  user: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired,
};
