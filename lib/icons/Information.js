'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var Information = React.createClass({
	displayName: 'Information',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '288,448 288,192 192,192 192,208 224,208 224,448 192,448 192,464 320,464 320,448 \t' }),
				React.createElement('path', { d: 'M255.8,144.5c26.6,0,48.2-21.6,48.2-48.2s-21.6-48.2-48.2-48.2c-26.6,0-48.2,21.6-48.2,48.2S229.2,144.5,255.8,144.5z' })
			)
		);
	}
});