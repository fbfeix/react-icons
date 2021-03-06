'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosRewindOutline = React.createClass({
	displayName: 'IosRewindOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M464,155v201.9L280.5,256L464,155 M240,156v77.7v27.1v95.6L64,256l176-100.2 M256,128L32,256l224,128V260.8L480,384V128 L256,251.2V128L256,128z' })
		);
	}
});