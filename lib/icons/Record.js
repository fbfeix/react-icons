'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var Record = React.createClass({
	displayName: 'Record',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M256,464c114.9,0,208-93.1,208-208c0-114.9-93.1-208-208-208C141.1,48,48,141.1,48,256C48,370.9,141.1,464,256,464z' })
		);
	}
});