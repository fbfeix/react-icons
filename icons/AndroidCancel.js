'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidCancel = React.createClass({
	displayName: 'AndroidCancel',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M256,48C140.559,48,48,140.559,48,256c0,115.436,92.559,208,208,208c115.435,0,208-92.564,208-208 C464,140.559,371.436,48,256,48z M360.002,330.881l-29.12,29.117L256,285.117l-74.881,74.881l-29.121-29.117L226.881,256 l-74.883-74.881l29.121-29.116L256,226.881l74.881-74.878l29.12,29.116L285.119,256L360.002,330.881z' })
			)
		);
	}
});