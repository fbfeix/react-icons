'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Reply = React.createClass({
	displayName: 'Reply',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M448,400c0,0-36.8-208-224-208v-80L64,256l160,134.4v-92.3C325.6,298.1,395,307,448,400z' })
			)
		);
	}
});