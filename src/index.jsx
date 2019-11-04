import ReactDOM    from "react-dom";
import React       from "react";
import { Router }  from 'react-router';
import history     from './utils/history';

import Routes      from './routes';

ReactDOM.render(
<Router history={history}>
  <Routes/>
</Router>,
  document.getElementById('contents')); // Render the component inside the content Node