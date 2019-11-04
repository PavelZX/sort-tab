import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Button, Container, Header, Icon, Menu} from 'semantic-ui-react'

import NoteContainer from './containers/NoteContainer';

import {configureStore} from "./data/store/storeConfig";

export class App extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <Container style={{padding: '2em 0em'}}>
                    <Menu borderless secondary>
                        <Menu.Item>
                            <Header>
                                VK Wall
                            </Header>
                        </Menu.Item>
                        <Menu.Item position='right'>

                            <Button color='facebook' as='a' href='https://github.com'>
                                <Icon name='github'/>
                                Project Source
                            </Button>
                        </Menu.Item>
                    </Menu>

                    <NoteContainer/>
                </Container>
            </Provider>
        )
    };
}
