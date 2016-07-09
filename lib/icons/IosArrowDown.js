'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosArrowDown = React.createClass({
	displayName: 'IosArrowDown',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('polygon', { points: '396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 ' })
		);
	}
});