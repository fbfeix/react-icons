'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var ArrowDownA = React.createClass({
	displayName: 'ArrowDownA',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('polygon', { points: '256.5,448.5 448.5,256.5 336.5,256.5 336.5,64.5 176.5,64.5 176.5,256.5 64.5,256.5 ' })
		);
	}
});