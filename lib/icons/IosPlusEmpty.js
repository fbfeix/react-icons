'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosPlusEmpty = React.createClass({
	displayName: 'IosPlusEmpty',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M384,265H264v119h-17V265H128v-17h119V128h17v120h120V265z' })
			)
		);
	}
});