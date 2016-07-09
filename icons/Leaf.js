'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Leaf = React.createClass({
	displayName: 'Leaf',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M456.7,378.7c-52.5-8-56.5-15.7-56.5-15.7c10.8-64.9-22.7-147.1-77.4-191.6c-72.8-59.2-183.5-16.2-269.7-106.2 c-20.1-21-8.4,235.5,99.5,332.7c78.9,71,171.8,49.2,197.3,37.6c23.1-10.6,39.3-29.9,39.3-29.9c42.1,13,62.9,12.2,62.9,12.2 C466.9,419.6,474.4,381.4,456.7,378.7z M360.6,383.1c-138.2-40.9-242.1-184.5-242.1-184.5s91.2,107.7,252,160.2 C370.7,366.9,365.9,378.5,360.6,383.1z' })
			)
		);
	}
});