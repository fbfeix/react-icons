'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Drag = React.createClass({
	displayName: 'Drag',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('rect', { y: '144', width: '512', height: '32' }),
				React.createElement('rect', { y: '240', width: '512', height: '32' }),
				React.createElement('rect', { y: '336', width: '512', height: '32' })
			)
		);
	}
});