import React, {Component} from 'react';
import { Link }           from 'react-router-dom';
import {Button, Container, Header, Icon, Menu} from 'semantic-ui-react';

import DeviceList         from './components/DeviceList';

export default class Device extends Component {
  render() {
    return (
      <Container style={{ padding: '2em 0em' }}>
        <Menu borderless secondary>
          <Menu.Item position='left'>
            <Header>
              <Icon name='trophy' />
                Устройства фирмы
            </Header>
          </Menu.Item>
          <Menu.Item>
            <Button>
              <Link to='/user'>
                <Icon name='users' />
                  Пользователи устройств
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
        <DeviceList />
      </Container>
    )
  };
}
