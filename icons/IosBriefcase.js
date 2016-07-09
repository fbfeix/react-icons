'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosBriefcase = React.createClass({
	displayName: 'IosBriefcase',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('rect', { x: '96', y: '112', width: '32', height: '16' }),
				React.createElement('rect', { x: '48', y: '208', width: '416', height: '240' }),
				React.createElement('rect', { x: '384', y: '112', width: '32', height: '16' }),
				React.createElement('path', { d: 'M416,128v32h-32v-32h-48V98.1V96c-0.5-18.2-13.6-32-32.2-32h-99.1C186.1,64,176,77.7,176,96v2.1V128h-48v32H96v-32H48v64 h416v-64H416z M320,127.5v0.5H192v-0.5V98.1c0-10.2,2.9-18.1,13.7-18.1h97.1c10.4,0,17.2,7.7,17.2,18.1V127.5z' })
			)
		);
	}
});