'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var University = React.createClass({
	displayName: 'University',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '256,64 32,176.295 64,197.367 64,400 96,416 96,217.849 255.852,320 387.996,234.549 480,174.727 \t' }),
				React.createElement('path', { d: 'M390.13,256L256,343.768L120.531,256L112,337.529C128,349.984,224,416,256.002,448C288,416,384,350.031,400,337.561 L390.13,256z' })
			)
		);
	}
});