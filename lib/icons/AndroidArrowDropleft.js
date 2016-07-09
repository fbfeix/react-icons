'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var AndroidArrowDropleft = React.createClass({
	displayName: 'AndroidArrowDropleft',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '320,128 192,256 320,384 \t' })
			)
		);
	}
});