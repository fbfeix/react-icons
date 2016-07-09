'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var ArrowMove = React.createClass({
	displayName: 'ArrowMove',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('polygon', { points: '480,256 384,160 384,236 276,236 276,128 352,128 256,32 160,128 236,128 236,236 128,236 128,160 32,256 128,352  128,276 236,276 236,384 160,384 256,480 352,384 275.8,384 275.4,275.5 384,275.8 384,352 ' })
		);
	}
});