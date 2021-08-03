import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Result from './components/Result';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";

const Root = () => (
	
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/result/" component={Result} />
  </Switch>

);


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Root />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
