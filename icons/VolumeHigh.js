'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var VolumeHigh = React.createClass({
	displayName: 'VolumeHigh',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '231,407.8 231,104.3 136.1,192 32,192 32,320 136.1,320 \t' }),
				React.createElement('path', { d: 'M287.1,355.7c20.5-27.9,32.8-62.3,32.8-99.7c0-37.4-12.3-71.8-32.8-99.7l-20.4,15.3c17.4,23.6,27.8,52.7,27.8,84.4 c0,31.6-10.4,60.8-27.8,84.3L287.1,355.7z' }),
				React.createElement('path', { d: 'M353.7,401.7c30-40.7,48-91.1,48-145.7s-18-104.9-48-145.7l-20.4,15.3c26.9,36.4,43,81.5,43,130.4 c0,48.9-16.1,93.9-43,130.3L353.7,401.7z' }),
				React.createElement('path', { d: 'M396.7,79.4c36.4,49.3,57.9,110.5,57.9,176.6c0,66.1-21.5,127.2-57.9,176.6l20.5,15.4c39.4-53.6,62.8-120,62.8-192 c0-72-23.4-138.4-62.8-192L396.7,79.4z' })
			)
		);
	}
});