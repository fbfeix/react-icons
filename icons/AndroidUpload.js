'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidUpload = React.createClass({
	displayName: 'AndroidUpload',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M403.002,217.001C388.998,148.002,328.998,96,256,96c-57.998,0-107.998,32.998-132.998,81.001 C63.002,183.002,16,233.998,16,296c0,65.996,53.999,120,120,120h260c55,0,100-45,100-100 C496,263.002,455.004,219.999,403.002,217.001z M288,276v76h-64v-76h-68l100-100l100,100H288z' })
		);
	}
});