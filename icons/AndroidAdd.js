'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidAdd = React.createClass({
	displayName: 'AndroidAdd',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_7_' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M416,277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416V277.333z' })
				)
			)
		);
	}
});