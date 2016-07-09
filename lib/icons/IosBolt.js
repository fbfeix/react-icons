'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosBolt = React.createClass({
	displayName: 'IosBolt',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M302.7,64L143,288h95.8l-29.5,160L369,224h-95.8L302.7,64L302.7,64z' })
		);
	}
});