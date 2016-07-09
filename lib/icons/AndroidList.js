'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidList = React.createClass({
	displayName: 'AndroidList',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M408,64H104c-22.091,0-40,17.908-40,40v304c0,22.092,17.909,40,40,40h304c22.092,0,40-17.908,40-40V104 C448,81.908,430.092,64,408,64z M304,368H144v-48h160V368z M368,280H144v-48h224V280z M368,192H144v-48h224V192z' })
			)
		);
	}
});