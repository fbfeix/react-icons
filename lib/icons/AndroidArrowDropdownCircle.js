'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidArrowDropdownCircle = React.createClass({
	displayName: 'AndroidArrowDropdownCircle',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M256,48C141.125,48,48,141.125,48,256s93.125,208,208,208s208-93.125,208-208S370.875,48,256,48z M256,320l-96-96h192 L256,320z' })
			)
		);
	}
});