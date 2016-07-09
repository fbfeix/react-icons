'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosChatboxes = React.createClass({
	displayName: 'IosChatboxes',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '336,48 48,48 48,272 160,272 160,160 336,160 \t' }),
				React.createElement('path', { d: 'M176,176v224h162.6l64,64H416v-64h48V176H176z' })
			)
		);
	}
});