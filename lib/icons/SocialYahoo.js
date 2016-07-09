'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var SocialYahoo = React.createClass({
	displayName: 'SocialYahoo',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M384.6,68.4c-11.3,0-22.5-0.8-32.6-4.4l-96,160L160,64c-10.1,3.6-20.7,4.4-32,4.4c-11.1,0-22.1-0.9-32-4.4l128,212.7V448 c10-3.5,20.8-4.4,32-4.4s22,0.9,32,4.4V277L416,64C406.1,67.4,395.7,68.4,384.6,68.4z' })
		);
	}
});