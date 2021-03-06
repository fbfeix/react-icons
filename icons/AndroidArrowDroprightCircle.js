'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidArrowDroprightCircle = React.createClass({
	displayName: 'AndroidArrowDroprightCircle',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M256,464c114.875,0,208-93.125,208-208S370.875,48,256,48S48,141.125,48,256S141.125,464,256,464z M224,352V160l96,96 L224,352z' })
			)
		);
	}
});