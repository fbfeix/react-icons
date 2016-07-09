'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosSkipforward = React.createClass({
	displayName: 'IosSkipforward',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M337,96v141.8L96,96v320l241-141.8V416h79V96H337z' })
		);
	}
});