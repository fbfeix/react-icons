'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var Easel = React.createClass({
	displayName: 'Easel',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('rect', { x: '80', y: '144', width: '352', height: '192' }),
				React.createElement('path', { d: 'M464,96H48c-8.837,0-16,7.163-16,16v256c0,8.837,6.932,16,15.768,16H464c8.837,0,16-7.163,16-16V112 C480,103.163,472.837,96,464,96z M448,352H64V128h384V352z' }),
				React.createElement('polygon', { points: '80,480 112,480 140.147,400 108.835,400 \t' }),
				React.createElement('polygon', { points: '270.83,32 241.472,32 224.171,80 288.099,80 \t' }),
				React.createElement('polygon', { points: '371.853,400 400,480 432,480 403.22,400 \t' }),
				React.createElement('rect', { x: '240', y: '400', width: '32', height: '48' })
			)
		);
	}
});