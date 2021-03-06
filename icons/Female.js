'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Female = React.createClass({
	displayName: 'Female',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M288,284c55.2-14.2,96-64.3,96-124c0-70.7-57.3-128-128-128S128,89.3,128,160c0,59.6,40.8,109.7,96,124v68h-64v64h64v64h64 v-64h64v-64h-64V284z M256,240c-44.1,0-80-35.9-80-80s35.9-80,80-80s80,35.9,80,80S300.1,240,256,240z' })
		);
	}
});