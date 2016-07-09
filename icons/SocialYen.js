'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var SocialYen = React.createClass({
	displayName: 'SocialYen',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M448,32h-80L256,253.128L144,32H64l112.368,208H128v48h73.564L216,319v17h-88v48h88v96h80v-96h88v-48h-88v-17l14.891-31H384 v-48h-48.289L448,32z' })
		);
	}
});