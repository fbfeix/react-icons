'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosCropStrong = React.createClass({
	displayName: 'IosCropStrong',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('rect', { x: '128', y: '64', width: '32', height: '48' }),
				React.createElement('polygon', { points: '160,352 160,176 128,176 128,384 336,384 336,352 \t' }),
				React.createElement('rect', { x: '400', y: '352', width: '48', height: '32' }),
				React.createElement('polygon', { points: '64,128 64,160 352,160 352,448 384,448 384,128 \t' })
			)
		);
	}
});