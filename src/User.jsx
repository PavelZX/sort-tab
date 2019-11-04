import React, {Component} from 'react';
import { Link }           from 'react-router-dom';
import {Button, Container, Header, Icon, Menu} from 'semantic-ui-react';

import UserList           from './components/UserList';

export default class User extends Component {
  render() {
    return (
      <Container style={{ padding: '2em 0em' }}>
        <Menu borderless secondary>
          <Menu.Item position='left'>
            <Header>
              <Icon name='users' />
                Пользователи устройств
            </Header>
          </Menu.Item>
          <Menu.Item>
            <Button>
              <Link to='/device'>
                <Icon name='trophy' />
                  Устройства фирмы
              </Link>
            </Button>
          </Menu.Item>          
          <Menu.Item position='right'>            
            <Button>
              <Icon name='heart' />
                Сохранить изменения
            </Button>
          </Menu.Item>
        </Menu>
        <UserList />
      </Container>
    )
  };
}
