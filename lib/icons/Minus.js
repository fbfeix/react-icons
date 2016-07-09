'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var Minus = React.createClass({
	displayName: 'Minus',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('rect', { x: '64', y: '224', width: '384', height: '64' })
		);
	}
});