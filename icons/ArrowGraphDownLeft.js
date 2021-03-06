'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var ArrowGraphDownLeft = React.createClass({
	displayName: 'ArrowGraphDownLeft',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('polygon', { points: '32,384 32,224 92.8,284.8 223.7,144 330.7,256 480,128 330.7,330.7 223.7,224 130.2,322.2 192,384 ' })
		);
	}
});