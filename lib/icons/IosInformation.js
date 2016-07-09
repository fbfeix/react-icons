'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosInformation = React.createClass({
	displayName: 'IosInformation',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M256,48C141.1,48,48,141.1,48,256c0,114.9,93.1,208,208,208c114.9,0,208-93.1,208-208C464,141.1,370.9,48,256,48z M251.5,152c11.1,0,20,9,20,20s-9,20-20,20c-11,0-20-9-20-20S240.4,152,251.5,152z M288,352h-64v-8h16V224h-16v-8h48v128h16V352z' })
			)
		);
	}
});