'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosGridView = React.createClass({
	displayName: 'IosGridView',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('rect', { x: '192', y: '192', width: '128', height: '128' }),
				React.createElement('path', { d: 'M64,64v384h384V64H64z M416,192h-80v128h80v16h-80v80h-16v-80H192v80h-16v-80H96v-16h80V192H96v-16h80V96h16v80h128V96h16 v80h80V192z' })
			)
		);
	}
});