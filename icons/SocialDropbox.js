'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var SocialDropbox = React.createClass({
	displayName: 'SocialDropbox',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '177,77 64,150.9 142.1,213.6 256,143.1 \t' }),
				React.createElement('polygon', { points: '64,276.3 177,350.2 256,284.1 142.1,213.6 \t' }),
				React.createElement('polygon', { points: '256,284.1 335,350.2 448,276.3 369.9,213.6 \t' }),
				React.createElement('polygon', { points: '448,150.9 335,77 256,143.1 369.9,213.6 \t' }),
				React.createElement('polygon', { points: '256.2,298.3 176.4,364.3 142,342.1 142,367 256,435 370,367 370,342.1 335.8,364.3 \t' })
			)
		);
	}
});