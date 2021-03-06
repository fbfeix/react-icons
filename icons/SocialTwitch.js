'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var SocialTwitch = React.createClass({
	displayName: 'SocialTwitch',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M80,32l-32,80v304h96v64h64l64-64h80l112-112V32H80z M256,272h-48V143h48V272z M368,272h-48V143h48V272z' })
			)
		);
	}
});