'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosBarcodeOutline = React.createClass({
	displayName: 'IosBarcodeOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '48,384 128,384 128,368 64,368 64,144 128,144 128,128 48,128 \t' }),
				React.createElement('polygon', { points: '384,128 384,144 448,144 448,368 384,368 384,384 464,384 464,128 \t' }),
				React.createElement('rect', { x: '112', y: '192', width: '16', height: '128' }),
				React.createElement('rect', { x: '384', y: '192', width: '16', height: '128' }),
				React.createElement('rect', { x: '320', y: '160', width: '16', height: '192' }),
				React.createElement('rect', { x: '176', y: '160', width: '16', height: '192' }),
				React.createElement('rect', { x: '247', y: '176', width: '16', height: '160' })
			)
		);
	}
});