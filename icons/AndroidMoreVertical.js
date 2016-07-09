'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidMoreVertical = React.createClass({
	displayName: 'AndroidMoreVertical',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M296,136c0-22.002-17.998-40-40-40s-40,17.998-40,40s17.998,40,40,40S296,158.002,296,136z M296,376 c0-22.002-17.998-40-40-40s-40,17.998-40,40s17.998,40,40,40S296,398.002,296,376z M296,256c0-22.002-17.998-40-40-40 s-40,17.998-40,40s17.998,40,40,40S296,278.002,296,256z' })
		);
	}
});