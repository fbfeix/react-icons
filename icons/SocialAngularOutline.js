'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var SocialAngularOutline = React.createClass({
	displayName: 'SocialAngularOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M255.982,64l187.967,69.105l-39.17,230.389l-148.881,79.949l-148.812-80.051L68.031,133.11L255.982,64 M255.981,32L32,112 l46.12,272L256,480l177.75-96L480,112L255.981,32L255.981,32z' }),
				React.createElement('path', { d: 'M344,352h40L256,72L128,352h40l26.584-56h122.827L344,352z M213.573,256l42.419-89.356L298.419,256H213.573z' })
			)
		);
	}
});