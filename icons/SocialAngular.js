'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var SocialAngular = React.createClass({
	displayName: 'SocialAngular',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '213.573,256 298.419,256 255.992,166.644 \t' }),
				React.createElement('path', { d: 'M255.981,32L32,112l46.12,272L256,480l177.75-96L480,112L255.981,32z M344,352l-26.589-56H194.584L168,352h-40L256,72 l128,280H344z' })
			)
		);
	}
});