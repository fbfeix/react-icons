'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosSkipbackwardOutline = React.createClass({
	displayName: 'IosSkipbackwardOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M96,96v320h79V274.2L416,416V96L175,237.8V96H96z M175.6,256l7.6-4.4L400,124v0v264L183.1,260.4L175.6,256z M112,112h47 v125.8v28v8.5V400h-47V112z' })
		);
	}
});