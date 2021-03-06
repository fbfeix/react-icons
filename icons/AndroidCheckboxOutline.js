'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidCheckboxOutline = React.createClass({
	displayName: 'AndroidCheckboxOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_24_' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M168.531,215.469l-29.864,29.864l96,96L448,128l-29.864-29.864L234.667,280.531L168.531,215.469z M405.333,405.333 H106.667V106.667H320V64H106.667C83.198,64,64,83.198,64,106.667v298.666C64,428.802,83.198,448,106.667,448h298.666 C428.802,448,448,428.802,448,405.333V234.667h-42.667V405.333z' })
				)
			)
		);
	}
});