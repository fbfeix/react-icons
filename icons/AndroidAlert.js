'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidAlert = React.createClass({
	displayName: 'AndroidAlert',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_30_' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M256,48C141.6,48,48,141.601,48,256s93.6,208,208,208c114.4,0,208-93.601,208-208S370.4,48,256,48z M280,360h-48v-40h48 V360z M280,272h-48V144h48V272z' })
				)
			)
		);
	}
});