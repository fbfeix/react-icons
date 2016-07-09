'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosClock = React.createClass({
	displayName: 'IosClock',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M273,273H160v-17h96V128h17 V273z' })
			)
		);
	}
});