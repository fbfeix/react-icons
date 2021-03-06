'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidLaptop = React.createClass({
	displayName: 'AndroidLaptop',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_29_' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M437.334,416C460.803,416,480,396.803,480,373.334V106.668C480,83.199,460.803,64,437.334,64H74.666 C51.197,64,32,83.199,32,106.668v266.666C32,396.803,51.197,416,74.666,416H0c0,23.469,64,32,96,32h320c32,0,96-8.531,96-32 H437.334z M74.666,106.668h362.668v271.998H74.666V106.668z M256,434.666c-11.729,0-21.333-9.604-21.333-21.334 c0-11.729,9.604-21.332,21.333-21.332s21.333,9.604,21.333,21.332C277.333,425.062,267.729,434.666,256,434.666z' })
				)
			)
		);
	}
});