'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidStar = React.createClass({
	displayName: 'AndroidStar',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '256,372.686 380.83,448 347.809,305.934 458,210.409 312.733,197.934 256,64 199.257,197.934 54,210.409  164.192,305.934 131.161,448 \t' })
			)
		);
	}
});