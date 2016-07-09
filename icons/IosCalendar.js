'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosCalendar = React.createClass({
	displayName: 'IosCalendar',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('rect', { x: '64', y: '192', width: '384', height: '256' }),
				React.createElement('polygon', { points: '448,96 352,96 352,144 336,144 336,96 176,96 176,144 160,144 160,96 64,96 64,176 448,176 \t' }),
				React.createElement('rect', { x: '160', y: '64', width: '16', height: '32' }),
				React.createElement('rect', { x: '336', y: '64', width: '16', height: '32' })
			)
		);
	}
});