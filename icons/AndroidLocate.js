'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidLocate = React.createClass({
	displayName: 'AndroidLocate',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M256,176c-44.004,0-80.001,36-80.001,80c0,44.004,35.997,80,80.001,80c44.005,0,79.999-35.996,79.999-80 C335.999,212,300.005,176,256,176z M446.938,234.667c-9.605-88.531-81.074-160-169.605-169.599V32h-42.666v33.067 c-88.531,9.599-160,81.068-169.604,169.599H32v42.667h33.062c9.604,88.531,81.072,160,169.604,169.604V480h42.666v-33.062 c88.531-9.604,160-81.073,169.605-169.604H480v-42.667H446.938z M256,405.333c-82.137,0-149.334-67.198-149.334-149.333 c0-82.136,67.197-149.333,149.334-149.333c82.135,0,149.332,67.198,149.332,149.333C405.332,338.135,338.135,405.333,256,405.333z ' })
				)
			)
		);
	}
});