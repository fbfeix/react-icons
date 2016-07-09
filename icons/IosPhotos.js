'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosPhotos = React.createClass({
	displayName: 'IosPhotos',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M96,128v320h384V128H96z' }),
				React.createElement('polygon', { points: '416,64 32,64 32,384 80,384 80,112 416,112 \t' })
			)
		);
	}
});