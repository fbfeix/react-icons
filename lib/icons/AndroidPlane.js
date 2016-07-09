'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidPlane = React.createClass({
	displayName: 'AndroidPlane',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_36_' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M448,336v-40L288,192V79.2c0-17.683-14.82-31.2-32-31.2c-17.179,0-32,13.518-32,31.2V192L64,296v40l160-48v113.602 l-48,31.199V464l80-16l80,16v-31.199l-48-31.199V288L448,336z' })
				)
			)
		);
	}
});