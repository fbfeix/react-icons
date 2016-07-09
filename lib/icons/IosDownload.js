'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosDownload = React.createClass({
	displayName: 'IosDownload',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '264,144 264,307 318.8,252.3 330.4,263.9 256,338.4 181.5,263.9 193.2,252.3 248,307 248,144 96,144 96,448  416,448 416,144 \t' }),
				React.createElement('rect', { x: '248', y: '64', width: '16', height: '80' })
			)
		);
	}
});