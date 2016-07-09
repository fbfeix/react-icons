'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var ArrowExpand = React.createClass({
	displayName: 'ArrowExpand',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '274,209.7 337.9,145.9 288,96 416,96 416,224 366.1,174.1 302.3,238 \t' }),
				React.createElement('polygon', { points: '274,302.3 337.9,366.1 288,416 416,416 416,288 366.1,337.9 302.3,274 \t' }),
				React.createElement('polygon', { points: '238,302.3 174.1,366.1 224,416 96,416 96,288 145.9,337.9 209.7,274 \t' }),
				React.createElement('polygon', { points: '238,209.7 174.1,145.9 224,96 96,96 96,224 145.9,174.1 209.7,238 \t' })
			)
		);
	}
});