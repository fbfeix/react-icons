'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var ArrowReturnLeft = React.createClass({
	displayName: 'ArrowReturnLeft',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M192,96v64h248c4.4,0,8,3.6,8,8v240c0,4.4-3.6,8-8,8H136c-4.4,0-8-3.6-8-8v-48c0-4.4,3.6-8,8-8h248V224H192v64L64,192 L192,96z' })
		);
	}
});