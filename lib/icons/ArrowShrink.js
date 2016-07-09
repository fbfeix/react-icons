'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var ArrowShrink = React.createClass({
	displayName: 'ArrowShrink',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '448,92.3 366.1,174.1 416,224 288,224 288,96 337.9,145.9 419.7,64 \t' }),
				React.createElement('polygon', { points: '448,419.7 366.1,337.9 416,288 288,288 288,416 337.9,366.1 419.7,448 \t' }),
				React.createElement('polygon', { points: '64,419.7 145.9,337.9 96,288 224,288 224,416 174.1,366.1 92.3,448 \t' }),
				React.createElement('polygon', { points: '64,92.3 145.9,174.1 96,224 224,224 224,96 174.1,145.9 92.3,64 \t' })
			)
		);
	}
});