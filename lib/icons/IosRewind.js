'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosRewind = React.createClass({
	displayName: 'IosRewind',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M256,128L32,256l224,128V260.8L480,384V128L256,251.2V128L256,128z' })
		);
	}
});