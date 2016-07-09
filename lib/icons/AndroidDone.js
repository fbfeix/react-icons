'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidDone = React.createClass({
	displayName: 'AndroidDone',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_1_' },
				React.createElement(
					'g',
					null,
					React.createElement(
						'g',
						null,
						React.createElement('polygon', { points: '186.301,339.893 96,249.461 64,279.968 186.301,402 448,140.506 416,110 \t\t\t' })
					)
				)
			)
		);
	}
});