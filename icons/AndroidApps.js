'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidApps = React.createClass({
	displayName: 'AndroidApps',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M96,176h80V96H96V176z M216,416h80v-80h-80V416z M96,416h80v-80H96V416z M96,296h80v-80H96V296z M216,296h80v-80h-80V296z M336,96v80h80V96H336z M216,176h80V96h-80V176z M336,296h80v-80h-80V296z M336,416h80v-80h-80V416z' })
				)
			)
		);
	}
});