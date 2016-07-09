'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosMedical = React.createClass({
	displayName: 'IosMedical',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M438,187.713l-31.927-55.426L288,200.574V64h-64v136.574l-118.073-68.287l-31.938,55.426L192.092,256L73.998,324.287 l31.928,55.426L224,311.426V448h64V311.426l118.072,68.287l31.939-55.426L319.908,256L438,187.713z' })
		);
	}
});