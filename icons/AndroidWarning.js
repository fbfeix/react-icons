'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidWarning = React.createClass({
	displayName: 'AndroidWarning',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_31_' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M32,464h448L256,48L32,464z M280,400h-48v-48h48V400z M280,320h-48v-96h48V320z' })
				)
			)
		);
	}
});