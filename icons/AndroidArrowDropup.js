'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidArrowDropup = React.createClass({
	displayName: 'AndroidArrowDropup',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '128,320 256,192 384,320 \t' })
			)
		);
	}
});