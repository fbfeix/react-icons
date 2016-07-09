'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidCreate = React.createClass({
	displayName: 'AndroidCreate',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_6_' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { fill: '#010101', d: 'M64,368v80h80l235.727-235.729l-79.999-79.998L64,368z M441.602,150.398 c8.531-8.531,8.531-21.334,0-29.865l-50.135-50.135c-8.531-8.531-21.334-8.531-29.865,0l-39.468,39.469l79.999,79.998 L441.602,150.398z' })
				)
			)
		);
	}
});