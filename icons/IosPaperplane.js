'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosPaperplane = React.createClass({
	displayName: 'IosPaperplane',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '96,249.6 202,296.3 416,96 \t' }),
				React.createElement('polygon', { points: '416,96 217.9,311.7 269.8,416 \t' })
			)
		);
	}
});