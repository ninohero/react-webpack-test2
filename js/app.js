//import React from 'react';  
var React = require('react');
import Router from 'react-router';  
//import $ from 'jquery';
//require('expose?$!expose?jQuery!jquery');
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './components/Login.js';

let App = React.createClass({  
  getDefaultProps: function () {
      return {
          param: 'test value'  
      };
  },
  getInitialState: function () {
      return {
          clickCount: 0,
          userName: 'unnamed'  
      };
  },
  handleClick: function(event){
    event.preventDefault();
    //this.setState({userName: name});
    console.log('clicky');
  },
  render() {
    return (
      <div className="nav">
        <Link to="app">Home</Link>
        <Link to="login">Login</Link>
        <a  href="blah" className='blah_class' onClick={this.handleClick}>blah</a>

        {/* this is the importTant part */}
        <RouteHandler/>
      </div>
    );
  }
});

let routes = (  
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={LoginHandler}/>
  </Route>
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});
