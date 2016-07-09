'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var ArrowLeftA = React.createClass({
	displayName: 'ArrowLeftA',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('polygon', { points: '64.5,256.5 256.5,448.5 256.5,336.5 448.5,336.5 448.5,176.5 256.5,176.5 256.5,64.5 ' })
		);
	}
});