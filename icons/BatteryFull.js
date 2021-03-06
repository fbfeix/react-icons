'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var BatteryFull = React.createClass({
	displayName: 'BatteryFull',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M469.9,192H433v-54c0-5.5-4.3-10-9.9-10H42.1c-5.6,0-10.1,4.5-10.1,10v236c0,5.5,4.5,10,10.1,10h381.1c5.5,0,9.9-4.5,9.9-10 v-54h36.9c5.6,0,10.1-4.5,10.1-10V202C480,196.5,475.5,192,469.9,192z' })
		);
	}
});