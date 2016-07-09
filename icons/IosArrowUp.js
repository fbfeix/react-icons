'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosArrowUp = React.createClass({
	displayName: 'IosArrowUp',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('polygon', { points: '396.6,352 416,331.3 256,160 96,331.3 115.3,352 256,201.5 ' })
		);
	}
});