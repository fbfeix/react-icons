'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidBookmark = React.createClass({
	displayName: 'AndroidBookmark',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M360,64H152c-22.002,0-40,17.998-40,40v344l144-64l144,64V104C400,81.998,382.002,64,360,64z' })
		);
	}
});