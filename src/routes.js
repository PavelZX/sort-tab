import React, { Fragment } from 'react';
import { Redirect, Route } from 'react-router-dom';

import User                from './User';
import Device              from './Device';

export default function Routes() {

  return (
    <Fragment>
      <Route path="/user" component={User} />
      <Route path="/device" component={Device} />
      <Route exact path="/" render={() => <Redirect to="/user"/>} />
    </Fragment>
  )
}
