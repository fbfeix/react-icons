'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidSend = React.createClass({
	displayName: 'AndroidSend',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('polygon', { points: '48,448 464,256 48,64 48,213.333 346,256 48,298.667 ' })
		);
	}
});