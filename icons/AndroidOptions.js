'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidOptions = React.createClass({
	displayName: 'AndroidOptions',

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
					React.createElement('rect', { x: '32', y: '384', width: '272', height: '32' }),
					React.createElement('rect', { x: '400', y: '384', width: '80', height: '32' }),
					React.createElement('path', { d: 'M384,447.5c0,17.949-14.327,32.5-32,32.5l0,0c-17.673,0-32-14.551-32-32.5v-95c0-17.949,14.327-32.5,32-32.5l0,0 c17.673,0,32,14.551,32,32.5V447.5z' })
				),
				React.createElement(
					'g',
					null,
					React.createElement('rect', { x: '32', y: '240', width: '80', height: '32' }),
					React.createElement('rect', { x: '208', y: '240', width: '272', height: '32' }),
					React.createElement('path', { d: 'M192,303.5c0,17.949-14.327,32.5-32,32.5l0,0c-17.673,0-32-14.551-32-32.5v-95c0-17.949,14.327-32.5,32-32.5l0,0 c17.673,0,32,14.551,32,32.5V303.5z' })
				),
				React.createElement(
					'g',
					null,
					React.createElement('rect', { x: '32', y: '96', width: '272', height: '32' }),
					React.createElement('rect', { x: '400', y: '96', width: '80', height: '32' }),
					React.createElement('path', { d: 'M384,159.5c0,17.949-14.327,32.5-32,32.5l0,0c-17.673,0-32-14.551-32-32.5v-95c0-17.949,14.327-32.5,32-32.5l0,0 c17.673,0,32,14.551,32,32.5V159.5z' })
				)
			)
		);
	}
});