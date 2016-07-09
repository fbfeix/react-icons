'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosPhotosOutline = React.createClass({
	displayName: 'IosPhotosOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M96,128v320h384V128H96z M464,432H112V144h352V432z' }),
				React.createElement('polygon', { points: '32,64 32,384 80,384 80,368 48,368 48,80 400,80 400,112 416,112 416,64 \t' })
			)
		);
	}
});