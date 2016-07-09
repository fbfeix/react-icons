'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosDownloadOutline = React.createClass({
	displayName: 'IosDownloadOutline',

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
					React.createElement('polygon', { points: '288,144 288,160 400,160 400,432 112,432 112,160 224,160 224,144 96,144 96,448 416,448 416,144 \t\t' })
				),
				React.createElement(
					'g',
					null,
					React.createElement('polygon', { points: '193.1,252.3 181.5,263.9 256,338.4 330.5,263.9 318.9,252.3 264.2,307 264.2,64 247.8,64 247.8,307 \t\t' })
				)
			)
		);
	}
});