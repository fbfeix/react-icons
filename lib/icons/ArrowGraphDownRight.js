'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var ArrowGraphDownRight = React.createClass({
	displayName: 'ArrowGraphDownRight',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('polygon', { points: '320,384 381.8,322.2 288.3,224 181.3,330.7 32,128 181.3,256 288.3,144 419.2,284.8 480,224 480,384 ' })
		);
	}
});