'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var ArrowGraphUpLeft = React.createClass({
	displayName: 'ArrowGraphUpLeft',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('polygon', { points: '192,128 130.2,189.8 223.7,288 330.7,181.3 480,384 330.7,256 223.7,368 92.8,227.2 32,288 32,128 ' })
		);
	}
});