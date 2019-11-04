import React, {Component} from 'react';
import {Button, Container, Header, Icon, Menu} from 'semantic-ui-react'

import List from './List.jsx';

export class App extends Component {
  render() {
    return (
      <Container style={{ padding: '2em 0em' }}>
        <Menu borderless secondary>
          <Menu.Item>
            <Header>
              React Semantic UI Sortable Table Example
            </Header>
          </Menu.Item>
          <Menu.Item position='right'>
            
            <Button color='facebook' as='a' href='https://github.com/gges5110/React-Semantic-UI-Sortable-Table-Example'>
              <Icon name='github' />
              Project Source
            </Button>
          </Menu.Item>
        </Menu>

        <List />
      </Container>
    )
  };
}
