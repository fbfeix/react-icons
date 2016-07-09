'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidHome = React.createClass({
	displayName: 'AndroidHome',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '208,448 208,320 304,320 304,448 401.6,448 401.6,256 464,256 256,64 48,256 110.4,256 110.4,448 \t' })
			)
		);
	}
});