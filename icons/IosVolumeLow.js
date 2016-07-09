'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosVolumeLow = React.createClass({
	displayName: 'IosVolumeLow',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('polygon', { points: '249.9,216 192,216 192,296 249.9,296 320,352 320,160 ' })
		);
	}
});