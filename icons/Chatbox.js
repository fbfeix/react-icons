'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Chatbox = React.createClass({
	displayName: 'Chatbox',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M124.3,400H277c14.4,0,14.4,0.1,21.3,5.2S384,464,384,464v-64h3.7c42.2,0,76.3-31.8,76.3-71.4V119.7 c0-39.6-34.2-71.7-76.3-71.7H124.3C82.2,48,48,80.1,48,119.7v208.9C48,368.2,82.2,400,124.3,400z' })
		);
	}
});