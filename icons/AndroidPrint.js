'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidPrint = React.createClass({
	displayName: 'AndroidPrint',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M399.95,160h-287.9C76.824,160,48,188.803,48,224v138.667h79.899V448h256.201v-85.333H464V224 C464,188.803,435.175,160,399.95,160z M352,416H160V288h192V416z M384.101,64H127.899v80h256.201V64z' })
			)
		);
	}
});