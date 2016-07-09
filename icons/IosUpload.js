'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosUpload = React.createClass({
	displayName: 'IosUpload',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '264,144 264,306 248,306 248,144 96,144 96,448 416,448 416,144 \t' }),
				React.createElement('polygon', { points: '264,63.4 318.8,118.1 330.4,106.5 256,32 181.5,106.5 193.2,118.1 248,63.4 248,144 264,144 \t' })
			)
		);
	}
});