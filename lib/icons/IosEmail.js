'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosEmail = React.createClass({
	displayName: 'IosEmail',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '448,384 448,141.8 316.9,241.6 385,319 383,321 304.1,251.4 256,288 207.9,251.4 129,321 127,319 195,241.6  64,142 64,384 \t' }),
				React.createElement('polygon', { points: '439.7,128 72,128 256,267.9 \t' })
			)
		);
	}
});