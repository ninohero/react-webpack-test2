import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

var MyMixin = React.createClass({
	doSomething: function(){
		console.log("mymixin is firing now");
	},
	render: function(){
		return (
			<span className="no_class"></span>
		);
	}
});

export default MyMixin;
