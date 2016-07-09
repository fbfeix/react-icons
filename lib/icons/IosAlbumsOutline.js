'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosAlbumsOutline = React.createClass({
	displayName: 'IosAlbumsOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M464,144v288H48V144H464 M480,128H32v320h448V128L480,128z' }),
				React.createElement('rect', { x: '72', y: '96', width: '368', height: '16' }),
				React.createElement('rect', { x: '104', y: '64', width: '304', height: '16' })
			)
		);
	}
});