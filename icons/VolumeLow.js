'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var VolumeLow = React.createClass({
	displayName: 'VolumeLow',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '311,407.7 311,104.4 216.2,192 112,192 112,320 216.2,320 \t' }),
				React.createElement('path', { d: 'M367.2,355.6c20.5-27.8,32.8-62.3,32.8-99.6c0-37.4-12.3-71.8-32.8-99.6l-20.4,15.3c17.4,23.6,27.8,52.7,27.8,84.3 c0,31.6-10.4,60.7-27.8,84.3L367.2,355.6z' })
			)
		);
	}
});