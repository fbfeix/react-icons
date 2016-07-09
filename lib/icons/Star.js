'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var Star = React.createClass({
	displayName: 'Star',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('polygon', { points: '480,200 308.519,200 256.029,32 203.519,200 32,200 170.946,304.209 116,480 256,368 396,480 341.073,304.195 ' })
		);
	}
});