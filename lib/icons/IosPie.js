'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosPie = React.createClass({
	displayName: 'IosPie',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M272,64v224L74.245,337.376C101.653,420.221,179.841,480,271.875,480C386.75,480,480,386.875,480,272S387,64,272,64L272,64 z' }),
				React.createElement('path', { d: 'M256,32h-5.5C90.5,32,32,148.25,32,239.287c0,0,0.25,56.666,18.91,88.291L256,275.573V32L256,32z' })
			)
		);
	}
});