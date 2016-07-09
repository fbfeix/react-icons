'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosFastforward = React.createClass({
	displayName: 'IosFastforward',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M256,128v123.2L32,128v256l224-123.2V384l224-128L256,128L256,128z' })
		);
	}
});