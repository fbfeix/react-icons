'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosUploadOutline = React.createClass({
	displayName: 'IosUploadOutline',

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
					React.createElement('polygon', { points: '193.1,118.1 181.5,106.5 256,32 330.5,106.5 318.9,118.1 264.2,63.4 264.2,306.4 247.8,306.4 247.8,63.4 \t\t' })
				)
			)
		);
	}
});