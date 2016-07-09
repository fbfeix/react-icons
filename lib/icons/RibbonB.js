'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var RibbonB = React.createClass({
	displayName: 'RibbonB',

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
					React.createElement('path', { d: 'M256,72c-48.523,0-88,39.477-88,88s39.477,88,88,88s88-39.477,88-88S304.523,72,256,72z' }),
					React.createElement('path', { d: 'M256,32c-70.692,0-128,57.308-128,128s57.308,128,128,128s128-57.308,128-128S326.692,32,256,32z M256,256 c-53.02,0-96-42.98-96-96s42.98-96,96-96s96,42.98,96,96S309.02,256,256,256z' })
				),
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M147.092,254.21L64,400h96l48,80l48-105.807l33.641-74.154C278.848,302.623,267.585,304,256,304 C212.495,304,173.497,284.707,147.092,254.21z' }),
					React.createElement('path', { d: 'M364.908,254.211c-15.077,17.412-34.26,31.172-56.043,39.774l-44.752,98.092L304,480l48-80h96L364.908,254.211z' })
				)
			)
		);
	}
});