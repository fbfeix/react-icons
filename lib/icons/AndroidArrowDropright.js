'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidArrowDropright = React.createClass({
	displayName: 'AndroidArrowDropright',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '192,128 320,256 192,384 \t' })
			)
		);
	}
});