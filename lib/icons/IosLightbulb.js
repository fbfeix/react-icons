'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosLightbulb = React.createClass({
	displayName: 'IosLightbulb',

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
					React.createElement('path', { d: 'M400,172.9C400,95.1,333.9,32,256,32c-77.9,0-144,63.1-144,141c0,31,13.2,59,30.2,83h-0.3c10.9,15,21.4,27.7,31.5,45 c22,37.8,18.6,74.3,18.7,81.6v1.4h32V256l-32-64h16.6l31.4,64v128h32V256l31.4-64H320l-32,64v128h32v-1.4 c0-8.9-3.6-43.8,18.4-81.6c10.1-17.3,20.6-30,31.5-45h-0.1C386.8,232,400,204,400,172.9z' })
				),
				React.createElement('rect', { x: '224', y: '464', width: '64', height: '16' }),
				React.createElement('rect', { x: '208', y: '432', width: '96', height: '16' }),
				React.createElement('rect', { x: '208', y: '400', width: '96', height: '16' })
			)
		);
	}
});