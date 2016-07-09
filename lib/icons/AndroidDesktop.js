'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var AndroidDesktop = React.createClass({
	displayName: 'AndroidDesktop',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_28_' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M437.333,32H74.667C51.198,32,32,51.197,32,74.666v282.667C32,380.802,51.198,400,74.667,400h138.666l-42.666,48v32 h170.666v-32l-42.666-48h138.666C460.802,400,480,380.802,480,357.333V74.666C480,51.197,460.802,32,437.333,32z M437.333,320 H74.667V74.666h362.666V320z' })
				)
			)
		);
	}
});