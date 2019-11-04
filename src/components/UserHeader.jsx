import {Table} from "semantic-ui-react";
import React from "react";

export function UserHeader(props) {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell width={1} sorted = {props.column === 'id' ? props.direction : null } onClick={() => props.handleSort('id')}>#</Table.HeaderCell>
        <Table.HeaderCell width={3} sorted = {props.column === 'name' ? props.direction : null } onClick={() => props.handleSort('name')}>Имя</Table.HeaderCell>
        <Table.HeaderCell width={3} sorted = {props.column === 'surname' ? props.direction : null } onClick={() => props.handleSort('surname')}>Фамилия</Table.HeaderCell>
        <Table.HeaderCell width={1} sorted = {props.column === 'descript' ? props.direction : null } onClick={() => props.handleSort('descript')}>Описание</Table.HeaderCell>
        <Table.HeaderCell width={1} sorted = {props.column === 'favorite' ? props.direction : null } onClick={() => props.handleSort('favorite')}>Favorite</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  )
}

