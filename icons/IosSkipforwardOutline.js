'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosSkipforwardOutline = React.createClass({
	displayName: 'IosSkipforwardOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M337,96v141.8L96,96v320l241-141.8V416h79V96H337z M328.9,260.4L112,388V124v0l216.9,127.6l7.6,4.4L328.9,260.4z M400,400 h-47V274.2v-8.5v-28V112h47V400z' })
		);
	}
});