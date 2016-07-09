'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosPlayOutline = React.createClass({
	displayName: 'IosPlayOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M144,124.9L353.8,256L144,387.1V124.9 M128,96v320l256-160L128,96L128,96z' })
			)
		);
	}
});