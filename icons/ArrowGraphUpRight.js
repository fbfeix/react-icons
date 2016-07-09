'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var ArrowGraphUpRight = React.createClass({
	displayName: 'ArrowGraphUpRight',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('polygon', { points: '320,128 381.8,189.8 288.3,288 181.3,181.3 32,384 181.3,256 288.3,368 419.2,227.2 480,288 480,128 ' })
		);
	}
});