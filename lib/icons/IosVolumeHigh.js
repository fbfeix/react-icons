'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosVolumeHigh = React.createClass({
	displayName: 'IosVolumeHigh',

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
					React.createElement(
						'g',
						null,
						React.createElement('path', { d: 'M374.1,128l-13.6,10.3C384.6,171.2,399,211.9,399,256c0,44.1-14.4,84.8-38.6,117.7l13.6,10.3c26.3-35.7,41.9-80,41.9-128 C415.9,208,400.4,163.7,374.1,128z' }),
						React.createElement('path', { d: 'M320,351.8c20-26.8,32-59.9,32-95.8s-12-69-32-95.8l-13.6,10.1c17.9,24,28.6,53.6,28.6,85.7s-10.7,61.7-28.6,85.7 L320,351.8z' }),
						React.createElement('path', { d: 'M273.1,319.9c13.7-17.9,21.9-39.9,21.9-63.9c0-24-8.2-46-21.9-63.9l-13.5,9.8c11.6,15.1,18.5,33.8,18.5,54.1 s-6.9,38.9-18.5,54.1L273.1,319.9z' })
					)
				),
				React.createElement('polygon', { points: '153.9,216 96,216 96,296 153.9,296 224,352 224,160 \t' })
			)
		);
	}
});