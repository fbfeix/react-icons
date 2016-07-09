'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Crop = React.createClass({
	displayName: 'Crop',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('rect', { x: '352', y: '432', width: '64', height: '48' }),
				React.createElement('polygon', { points: '416,352 416,96 176,96 176,160 352,160 352,352 160,352 160,32 96,32 96,96 32,96 32,160 96,160 96,416 480,416  480,352 \t' })
			)
		);
	}
});