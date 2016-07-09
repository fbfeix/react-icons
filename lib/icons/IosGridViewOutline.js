'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosGridViewOutline = React.createClass({
	displayName: 'IosGridViewOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M448,192v-16H336V64h-16v112H192V64h-16v112H64v16h112v128H64v16h112v112h16V336h128v112h16V336h112v-16H336V192H448z M320,320H192V192h128V320z' })
		);
	}
});