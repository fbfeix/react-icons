'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosChatbubble = React.createClass({
	displayName: 'IosChatbubble',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M256,96C149.9,96,64,165.1,64,250.3c0,30.7,11.2,59.3,30.4,83.3c0.9,0.9,2.9,3.8,3.6,4.9c0,0-1-1.6-1.1-1.9c0,0,0,0,0,0l0,0 c0,0,0,0,0,0c2.3,3.3,3.6,7.1,3.6,11.2c0,1.4-17.9,58-17.9,58l0,0c-1.3,4.4,2.1,8.9,7.6,10c0.8,0.2,1.6,0.2,2.4,0.2 c1.3,0,2.5-0.2,3.7-0.5l1.6-0.6l50.6-22c0.9-0.4,9-3.5,10-3.9c0,0,0.6-0.2,0.6-0.2c0,0-0.1,0-0.6,0.2c3.4-1.2,7.2-1.8,11.2-1.8 c3.6,0,7.1,0.5,10.3,1.5c0.1,0,0.2,0,0.2,0.1c0.5,0.2,1,0.3,1.5,0.5c23.1,7.9,48.4,10.3,75.1,10.3c106,0,191-64.1,191-149.3 C448,165.1,362,96,256,96L256,96z' })
		);
	}
});