'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var AndroidImage = React.createClass({
	displayName: 'AndroidImage',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_8_' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M448,405.333V106.667C448,83.198,428.802,64,405.333,64H106.667C83.198,64,64,83.198,64,106.667v298.666 C64,428.802,83.198,448,106.667,448h298.666C428.802,448,448,428.802,448,405.333z M181.333,288l53.334,64l74.666-96l96,128 H106.667L181.333,288z' })
				)
			)
		);
	}
});