'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidCalendar = React.createClass({
	displayName: 'AndroidCalendar',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M368.005,272h-96v96h96V272z M336.005,64v32h-160V64h-48v32h-24.01c-22.002,0-40,17.998-40,40v272 c0,22.002,17.998,40,40,40h304.01c22.002,0,40-17.998,40-40V136c0-22.002-17.998-40-40-40h-24V64H336.005z M408.005,408h-304.01 V196h304.01V408z' })
			)
		);
	}
});