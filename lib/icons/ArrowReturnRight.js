'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var ArrowReturnRight = React.createClass({
	displayName: 'ArrowReturnRight',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M448,192l-128,96v-64H128v128h248c4.4,0,8,3.6,8,8v48c0,4.4-3.6,8-8,8H72c-4.4,0-8-3.6-8-8V168c0-4.4,3.6-8,8-8h248V96 L448,192z' })
		);
	}
});