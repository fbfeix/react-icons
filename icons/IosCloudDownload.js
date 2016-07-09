'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosCloudDownload = React.createClass({
	displayName: 'IosCloudDownload',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '248,435 193.3,381.2 181.6,392.6 256.1,466 330.6,392.6 318.8,381.2 264,435 264,328 248,328 \t' }),
				React.createElement('path', { d: 'M399.2,164.4c0-1.2,0.2-2.3,0.2-3.5C399.4,97.4,346.5,46,282.6,46c-46.1,0-85.8,26.8-104.4,65.4c-8.1-4-17.1-6.3-26.8-6.3 c-29.6,0-54.1,23.3-58.9,51.3c-35.2,12-60.6,43.4-60.6,82.4c0,49.1,40.1,89.2,89.6,89.2H192h21h35V193h16v135h134 c45,0,81.9-37.2,81.9-82.1C479.9,201,444.5,164.5,399.2,164.4z' })
			)
		);
	}
});