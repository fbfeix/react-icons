'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidMenu = React.createClass({
	displayName: 'AndroidMenu',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_3_' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M64,384h384v-42.666H64V384z M64,277.334h384v-42.667H64V277.334z M64,128v42.665h384V128H64z' })
				)
			)
		);
	}
});