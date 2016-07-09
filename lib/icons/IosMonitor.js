'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosMonitor = React.createClass({
	displayName: 'IosMonitor',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M496,384V96H16v288h175v16h-64v16h257v-16h-64v-16H496z M32,112h448v256H32V112z' }),
			React.createElement(
				'g',
				null,
				React.createElement('rect', { x: '48', y: '128', width: '416', height: '224' })
			)
		);
	}
});