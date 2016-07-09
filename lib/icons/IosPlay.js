'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosPlay = React.createClass({
	displayName: 'IosPlay',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M128,96v320l256-160L128,96L128,96z' })
			)
		);
	}
});