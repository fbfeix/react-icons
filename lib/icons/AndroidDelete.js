'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var AndroidDelete = React.createClass({
	displayName: 'AndroidDelete',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M128,405.429C128,428.846,147.198,448,170.667,448h170.667C364.802,448,384,428.846,384,405.429V160H128V405.429z M416,96 h-80l-26.785-32H202.786L176,96H96v32h320V96z' })
			)
		);
	}
});