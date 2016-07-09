'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidArrowDown = React.createClass({
	displayName: 'AndroidArrowDown',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_8_' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M277.375,85v259.704l119.702-119.702L427,256L256,427L85,256l29.924-29.922l119.701,118.626V85H277.375z' })
				)
			)
		);
	}
});