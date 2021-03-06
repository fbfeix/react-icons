'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosChatboxesOutline = React.createClass({
	displayName: 'IosChatboxesOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '64,64 320,64 320,160 336,160 336,48 48,48 48,272 160,272 160,256 64,256 \t' }),
				React.createElement('path', { d: 'M176,176v224h162.6l64,64H416v-64h48V176H176z M448,384h-48v54.6L345,384H192V192h256V384z' })
			)
		);
	}
});