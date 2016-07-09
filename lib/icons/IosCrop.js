'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosCrop = React.createClass({
	displayName: 'IosCrop',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('rect', { x: '128', y: '64', width: '16', height: '48' }),
				React.createElement('polygon', { points: '144,368 144,160 128,160 128,384 352,384 352,368 \t' }),
				React.createElement('rect', { x: '400', y: '368', width: '48', height: '16' }),
				React.createElement('polygon', { points: '64,128 64,144 368,144 368,448 384,448 384,128 \t' })
			)
		);
	}
});