'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var Egg = React.createClass({
	displayName: 'Egg',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M256,32C192,32,96,165.2,96,288.9C96,412.6,160,480,256,480s160-67.4,160-191.1C416,165.2,320,32,256,32z' })
		);
	}
});