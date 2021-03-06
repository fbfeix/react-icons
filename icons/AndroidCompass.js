'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidCompass = React.createClass({
	displayName: 'AndroidCompass',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M256,231.358c-13.442,0-24.643,11.2-24.643,24.642s11.2,24.643,24.643,24.643s24.643-11.2,24.643-24.643 S269.442,231.358,256,231.358z M256,32C132.8,32,32,132.8,32,256s100.8,224,224,224s224-100.8,224-224S379.2,32,256,32z M305.284,305.284L121.6,390.4l85.116-183.679L390.4,121.6L305.284,305.284z' })
		);
	}
});