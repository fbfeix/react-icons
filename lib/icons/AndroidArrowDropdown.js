'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidArrowDropdown = React.createClass({
	displayName: 'AndroidArrowDropdown',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '128,192 256,320 384,192 \t' })
			)
		);
	}
});