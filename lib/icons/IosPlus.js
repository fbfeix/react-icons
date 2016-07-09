'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosPlus = React.createClass({
	displayName: 'IosPlus',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M384,265H264v119h-17V265 H128v-17h119V128h17v120h120V265z' })
			)
		);
	}
});