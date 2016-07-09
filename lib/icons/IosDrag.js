'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosDrag = React.createClass({
	displayName: 'IosDrag',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('rect', { x: '80', y: '304', width: '352', height: '16' }),
				React.createElement('rect', { x: '80', y: '248', width: '352', height: '16' }),
				React.createElement('rect', { x: '80', y: '192', width: '352', height: '16' })
			)
		);
	}
});