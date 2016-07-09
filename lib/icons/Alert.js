'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var Alert = React.createClass({
	displayName: 'Alert',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M320,480H192v-96h128V480z M304,320h-96L192,32h128L304,320z' })
			)
		);
	}
});