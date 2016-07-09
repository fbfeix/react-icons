'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var SocialTwitchOutline = React.createClass({
	displayName: 'SocialTwitchOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M80,32l-32,80v304h96v64h64l64-64h80l112-112V32H80z M416,288l-64,64h-96.001L192,416v-64h-80V80h304V288z' })
				),
				React.createElement('rect', { x: '320', y: '143', width: '48', height: '129' }),
				React.createElement('rect', { x: '208', y: '143', width: '48', height: '129' })
			)
		);
	}
});