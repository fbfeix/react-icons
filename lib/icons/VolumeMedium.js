'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var VolumeMedium = React.createClass({
	displayName: 'VolumeMedium',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '270,407.7 270,104.4 175.3,192 71,192 71,320 175.3,320 \t' }),
				React.createElement('path', { d: 'M326.3,355.6c20.5-27.8,32.8-62.3,32.8-99.6c0-37.4-12.3-71.8-32.8-99.6l-20.4,15.3c17.4,23.6,27.8,52.7,27.8,84.3 c0,31.6-10.4,60.7-27.8,84.3L326.3,355.6z' }),
				React.createElement('path', { d: 'M392.8,401.6c30-40.7,48-91,48-145.6s-18-104.9-48-145.6l-20.4,15.3c26.9,36.4,43,81.4,43,130.3c0,48.9-16.1,93.8-43,130.3 L392.8,401.6z' })
			)
		);
	}
});