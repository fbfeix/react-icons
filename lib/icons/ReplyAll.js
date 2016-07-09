'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var ReplyAll = React.createClass({
	displayName: 'ReplyAll',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M304.5,192v-80L152.7,255.8L304.5,390v-91.9c68,0,107.9,8.9,159.1,101.9C463.6,400,457.5,192,304.5,192z' }),
				React.createElement(
					'g',
					null,
					React.createElement('polygon', { points: '47.5,256 191.5,382.5 191.5,324 109.3,256 191.5,177.4 191.5,120.4 \t\t' })
				)
			)
		);
	}
});