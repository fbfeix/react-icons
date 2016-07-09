'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidVolumeMute = React.createClass({
	displayName: 'AndroidVolumeMute',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M64,192v128h85.334L256,431.543V80.458L149.334,192H64z' })
		);
	}
});