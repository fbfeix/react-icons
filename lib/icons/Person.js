'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var Person = React.createClass({
	displayName: 'Person',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M448,448c0,0,0-26.4-2.2-40.2c-1.8-10.9-16.9-25.3-81.1-48.9c-63.2-23.2-59.3-11.9-59.3-54.6c0-27.7,14.1-11.6,23.1-64.2 c3.5-20.7,6.3-6.9,13.9-40.1c4-17.4-2.7-18.7-1.9-27c0.8-8.3,1.6-15.7,3.1-32.7C345.4,119.3,325.9,64,256,64 c-69.9,0-89.4,55.3-87.5,76.4c1.5,16.9,2.3,24.4,3.1,32.7c0.8,8.3-5.9,9.6-1.9,27c7.6,33.1,10.4,19.3,13.9,40.1 c9,52.6,23.1,36.5,23.1,64.2c0,42.8,3.9,31.5-59.3,54.6c-64.2,23.5-79.4,38-81.1,48.9C64,421.6,64,448,64,448h192H448z' })
		);
	}
});