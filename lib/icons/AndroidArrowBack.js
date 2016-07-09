'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var AndroidArrowBack = React.createClass({
	displayName: 'AndroidArrowBack',

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
					React.createElement('path', { d: 'M427,234.625H167.296l119.702-119.702L256,85L85,256l171,171l29.922-29.924L167.296,277.375H427V234.625z' })
				)
			)
		);
	}
});