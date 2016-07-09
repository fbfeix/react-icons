'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidCheckbox = React.createClass({
	displayName: 'AndroidCheckbox',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_22_' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M405.333,64H106.667C83.198,64,64,83.198,64,106.667v298.666C64,428.802,83.198,448,106.667,448h298.666 C428.802,448,448,428.802,448,405.333V106.667C448,83.198,428.802,64,405.333,64z M213.333,362.667L106.667,256l29.864-29.864 l76.802,76.802l162.136-162.136l29.864,29.865L213.333,362.667z' })
				)
			)
		);
	}
});