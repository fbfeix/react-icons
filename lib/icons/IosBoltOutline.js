'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosBoltOutline = React.createClass({
	displayName: 'IosBoltOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M273.9,132l-16.5,89.1L254,240h19.2h64.8l-99.8,140l16.5-89.1L258,272h-19.2h-64.7L273.9,132 M302.7,64L143,288h95.8 l-29.5,160L369,224h-95.8L302.7,64L302.7,64z' })
		);
	}
});