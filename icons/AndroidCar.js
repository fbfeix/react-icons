'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidCar = React.createClass({
	displayName: 'AndroidCar',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_15_' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M403.208,117.333c-4.271-12.802-16-21.333-29.875-21.333H138.667c-13.875,0-25.604,8.531-29.875,21.333L64,234.667v160 C64,406.396,73.604,416,85.333,416h21.334c11.729,0,21.333-9.604,21.333-21.333V384h256v10.667 c0,11.729,9.604,21.333,21.333,21.333h21.334c11.729,0,21.333-9.604,21.333-21.333v-160L403.208,117.333z M138.667,320 c-18.125,0-32-13.865-32-32s13.875-32,32-32s32,13.866,32,32S156.792,320,138.667,320z M373.333,320c-18.125,0-32-13.865-32-32 s13.875-32,32-32s32,13.866,32,32S391.458,320,373.333,320z M106.667,213.333l32-85.333h234.666l32,85.333H106.667z' })
				)
			)
		);
	}
});