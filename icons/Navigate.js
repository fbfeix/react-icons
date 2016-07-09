'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Navigate = React.createClass({
	displayName: 'Navigate',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('polygon', { points: '480,32 32,224 288,224 288,480 ' })
		);
	}
});