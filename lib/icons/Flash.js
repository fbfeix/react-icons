'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var Flash = React.createClass({
	displayName: 'Flash',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('polygon', { points: '96,288 243,288 191.9,480 416,224 269,224 320,32 ' })
		);
	}
});