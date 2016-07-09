'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosMinusEmpty = React.createClass({
	displayName: 'IosMinusEmpty',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M384,265H128v-17h256V265z' })
			)
		);
	}
});