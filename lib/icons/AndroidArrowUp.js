'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var AndroidArrowUp = React.createClass({
	displayName: 'AndroidArrowUp',

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
					React.createElement('path', { d: 'M277.375,427V167.296l119.702,119.702L427,256L256,85L85,256l29.924,29.922l119.701-118.626V427H277.375z' })
				)
			)
		);
	}
});