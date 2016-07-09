'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var Home = React.createClass({
	displayName: 'Home',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '448,288 256,64 64,288 112,288 112,448 208,448 208,320 304,320 304,448 400,448 400,288 \t' })
			)
		);
	}
});