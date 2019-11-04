import {Table} from "semantic-ui-react";
import React from "react";

export function DeviceHeader(props) {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell width={1} sorted = {props.column === 'id' ? props.direction : null } onClick={() => props.handleSort('id')}>#</Table.HeaderCell>
        <Table.HeaderCell width={3} sorted = {props.column === 'named' ? props.direction : null } onClick={() => props.handleSort('named')}>Название</Table.HeaderCell>
        <Table.HeaderCell width={3} sorted = {props.column === 'serial' ? props.direction : null } onClick={() => props.handleSort('serial')}>Серийный номер</Table.HeaderCell>
        <Table.HeaderCell width={1} sorted = {props.column === 'favorite' ? props.direction : null } onClick={() => props.handleSort('favorite')}>Favorite</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  )
}

