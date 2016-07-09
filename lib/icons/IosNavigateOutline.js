'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosNavigateOutline = React.createClass({
	displayName: 'IosNavigateOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M256,64.5c51.1,0,99.2,19.9,135.4,56.1s56.1,84.2,56.1,135.4s-19.9,99.2-56.1,135.4s-84.2,56.1-135.4,56.1 s-99.2-19.9-135.4-56.1C84.5,355.2,64.5,307.1,64.5,256s19.9-99.2,56.1-135.4C156.8,84.5,204.9,64.5,256,64.5 M256,48 C141.1,48,48,141.1,48,256c0,114.9,93.1,208,208,208c114.9,0,208-93.1,208-208C464,141.1,370.9,48,256,48L256,48z' }),
				React.createElement('polygon', { points: '352,160 128.3,256 256,256 256,384 \t' })
			)
		);
	}
});