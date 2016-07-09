'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosFastforwardOutline = React.createClass({
	displayName: 'IosFastforwardOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M48,155l183.5,101L48,356.9V155 M272,155.8L448,256L272,356.4v-95.6v-27.1V156 M256,128v123.2L32,128v256l224-123.2V384 l224-128L256,128L256,128z' })
		);
	}
});