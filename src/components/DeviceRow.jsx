import React from "react";
import {Button, Table} from "semantic-ui-react";
import PropTypes from "prop-types";
import InlineEditable from "react-inline-editable-field";

export const DeviceRow = (props) => (

  function updateListing(isChanged, val){
    this.setState({named: val});
  },

  <Table.Row>
    <Table.Cell>{props.device.id}</Table.Cell>
    <Table.Cell>
      <InlineEditable
                content={props.device.named}
                inputType = "textarea"
                displayPlaceholder="Enter text here.."
                onBlur={(val, isChanged) => {this.updateListing(isChanged, val)}}
              />
    </Table.Cell>
    <Table.Cell>{props.device.serial}</Table.Cell>
    <Table.Cell textAlign='center'>
      <Button
        onClick={() => props.addFavorite(props.device)}
        color={props.device.favorite? 'google plus' : 'twitter'}
        icon={props.device.favorite ? 'heart' : 'heart outline'} />
    </Table.Cell>
  </Table.Row>
);

DeviceRow.propTypes = {
  device: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired,
};
