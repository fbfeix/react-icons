'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidArrowDropleftCircle = React.createClass({
	displayName: 'AndroidArrowDropleftCircle',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M464,256c0-114.875-93.125-208-208-208S48,141.125,48,256s93.125,208,208,208S464,370.875,464,256z M192,256l96-96v192 L192,256z' })
			)
		);
	}
});