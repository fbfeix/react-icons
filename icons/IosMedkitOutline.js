'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosMedkitOutline = React.createClass({
	displayName: 'IosMedkitOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M272,208v48v16h16h48v32h-48h-16v16v48h-32v-48v-16h-16h-48v-32h48h16v-16v-48H272 M288,192h-64v64h-64v64h64v64h64v-64 h64v-64h-64V192L288,192z' })
				),
				React.createElement('path', { d: 'M336,128V96c-0.5-18.2-13.6-32-32.2-32h-99.1C186.1,64,176,77.7,176,96v32H48v320h416V128H336z M192,98.1 c0-10.2,2.9-18.1,13.7-18.1h97.1c10.4,0,17.2,7.7,17.2,18.1V128H192V98.1z M448,432H64V144h384V432z' })
			)
		);
	}
});