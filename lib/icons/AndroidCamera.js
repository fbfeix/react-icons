'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var AndroidCamera = React.createClass({
	displayName: 'AndroidCamera',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('circle', { cx: '256', cy: '280', r: '63' }),
				React.createElement('path', { d: 'M440,96h-88l-32-32H192l-32,32H72c-22.092,0-40,17.908-40,40v272c0,22.092,17.908,40,40,40h368c22.092,0,40-17.908,40-40 V136C480,113.908,462.092,96,440,96z M256,392c-61.855,0-112-50.145-112-112s50.145-112,112-112s112,50.145,112,112 S317.855,392,256,392z' })
			)
		);
	}
});