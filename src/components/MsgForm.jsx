import React from 'react';
import {Button, Icon, Form } from 'semantic-ui-react';

export default class MsgForm extends React.Component {
    constructor() {
        super();
        this.state = {
          published: false,
         };
        this.title = this.title.bind(this);
        this.message = this.message.bind(this);
      }

    componentDidMount() {
        setDocumentTitle('Форма сообщения')
      }
    
      _handleSubmit = (e) => {
        e.preventDefault()
    
        const data = {
          title: this.refs.title.value,
          message: this.refs.message.value,
        }
    
        alert(data)
        let this.published = true

      }
  render() {
    return (
        <Form success onSubmit={this._handleSubmit}>
          <Form.Group widths={2}>
            <div><input ref="title" id="title" type="text" placeholder="Заголовок" required={true} /></div>
            <div><input ref="message" id="message" type="text" placeholder="Сообщение" required={true} /></div>
            
          </Form.Group>
          <Icon name='heart' />
          <Button type="submit">Сохранить</Button>
          <input type="checkbox" onChange={this.published} name="Опубликовано" />
        </Form>
    )
  };
}
