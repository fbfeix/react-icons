'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Pound = React.createClass({
	displayName: 'Pound',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M125.2,352.3H32v-54.6h101.2l13.1-83.3H47v-54.6h107.2L176,32h63.9l-21.8,127.7h105.6L345.5,32h63.1l-21.8,127.7H480v54.6 H378.1l-12.3,83.3H465v54.6H358.5L336,480h-63.1l21.8-127.7H188.3L166.5,480h-63.1L125.2,352.3z M209.4,214.3L197,297.7h105.6 l12.3-83.3H209.4z' })
			)
		);
	}
});