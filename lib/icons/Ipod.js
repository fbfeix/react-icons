'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var Ipod = React.createClass({
	displayName: 'Ipod',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M256,311c-17.7,0-32,14.3-32,32c0,17.6,14.3,32,32,32c17.6,0,32-14.3,32-32C288,325.3,273.7,311,256,311z' }),
				React.createElement('path', { d: 'M340.4,64H171.6C156.4,64,144,76.2,144,91.7v328.7c0,15.5,12.4,27.7,27.6,27.7h168.8c15.2,0,27.6-12.2,27.6-27.7V91.7 C368,76.2,355.6,64,340.4,64z M256.1,416.1c-39.8,0-72.1-32.2-72.1-72c0-39.7,32.3-72,72.1-72c39.7,0,71.9,32.3,71.9,72 C328,383.9,295.8,416.1,256.1,416.1z M335.9,226.8c-0.8,7.6-7,13.2-14.7,13.2h-131c-8.2,0-14.2-6.2-14.2-14.6V110.9 c0-7.5,5-13.7,12-14.9l135.8,0c6.5,1.2,11.5,6.6,12.2,13.3L335.9,226.8z' })
			)
		);
	}
});