'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidRemove = React.createClass({
	displayName: 'AndroidRemove',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('rect', { x: '96', y: '235', width: '320', height: '42' })
		);
	}
});