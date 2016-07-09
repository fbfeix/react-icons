'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var AndroidMoreHorizontal = React.createClass({
	displayName: 'AndroidMoreHorizontal',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M136,216c-22.002,0-40,17.998-40,40s17.998,40,40,40s40-17.998,40-40S158.002,216,136,216z M376,216 c-22.002,0-40,17.998-40,40s17.998,40,40,40s40-17.998,40-40S398.002,216,376,216z M256,216c-22.002,0-40,17.998-40,40 s17.998,40,40,40s40-17.998,40-40S278.002,216,256,216z' })
		);
	}
});