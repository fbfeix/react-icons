'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosCopyOutline = React.createClass({
	displayName: 'IosCopyOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '304,96 288,96 288,176 368,176 368,160 304,160 \t' }),
				React.createElement('path', { d: 'M325.3,64H160v48h-48v336h240v-48h48V139L325.3,64z M336,432H128V128h32v272h176V432z M384,384H176V80h142.7l65.3,65.6V384 z' })
			)
		);
	}
});