'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosSkipbackward = React.createClass({
	displayName: 'IosSkipbackward',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M96,96v320h79V274.2L416,416V96L175,237.8V96H96z' })
		);
	}
});