'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var Podium = React.createClass({
	displayName: 'Podium',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('rect', { x: '32', y: '256', width: '128', height: '192' }),
				React.createElement('rect', { x: '192', y: '160', width: '128', height: '288' }),
				React.createElement('rect', { x: '352', y: '320', width: '128', height: '128' })
			)
		);
	}
});