'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosBrowsers = React.createClass({
	displayName: 'IosBrowsers',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M64,144v304h303.9V144H64z' }),
				React.createElement('polygon', { points: '144,64 144,128 384,128 384,368 448,368 448,64 \t' })
			)
		);
	}
});