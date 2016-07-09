'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var BatteryCharging = React.createClass({
	displayName: 'BatteryCharging',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M42.1,384h381.1c5.5,0,9.9-4.5,9.9-10v-54h36.9c5.6,0,10.1-4.5,10.1-10V202c0-5.5-4.5-10-10.1-10H433v-54 c0-5.5-4.3-10-9.9-10H42.1c-5.6,0-10.1,4.5-10.1,10v236C32,379.5,36.5,384,42.1,384z M257.4,160l-27.9,81H291L190.6,352l27.9-81H157 L257.4,160z' })
		);
	}
});