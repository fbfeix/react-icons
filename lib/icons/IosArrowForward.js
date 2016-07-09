'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosArrowForward = React.createClass({
	displayName: 'IosArrowForward',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('polygon', { points: '160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 ' })
		);
	}
});