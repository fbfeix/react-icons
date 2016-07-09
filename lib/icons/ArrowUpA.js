'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var ArrowUpA = React.createClass({
	displayName: 'ArrowUpA',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('polygon', { points: '256.5,64.5 64.5,256.5 176.5,256.5 176.5,448.5 336.5,448.5 336.5,256.5 448.5,256.5 ' })
		);
	}
});