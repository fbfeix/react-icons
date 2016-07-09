'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosPauseOutline = React.createClass({
	displayName: 'IosPauseOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M191,112v288h-47V112H191 M207,96h-79v320h79V96L207,96z' }),
				React.createElement('path', { d: 'M368,112v288h-47V112H368 M384,96h-79v320h79V96L384,96z' })
			)
		);
	}
});