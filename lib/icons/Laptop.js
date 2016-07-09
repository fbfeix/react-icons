'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var Laptop = React.createClass({
	displayName: 'Laptop',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M480,106.3c0-5.6-4.1-10.3-9.6-10.3H42.2c-5.5,0-10.2,4.6-10.2,10.3V368h448V106.3z M448,336H64V128h384V336z' }),
				React.createElement('path', { d: 'M0,388.7C70.2,408.6,115.8,416,256,416c140.2,0,185.8-7.3,256-27.3V384H0V388.7z' })
			)
		);
	}
});