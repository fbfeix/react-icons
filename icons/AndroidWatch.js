'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidWatch = React.createClass({
	displayName: 'AndroidWatch',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_11_' },
				React.createElement(
					'g',
					null,
					React.createElement(
						'g',
						null,
						React.createElement('path', { d: 'M416,256c0-51.001-24.004-96.001-60.996-125L336,16H176l-19.004,115C120.004,159.999,96,204.999,96,256 c0,50.996,24.004,95.996,60.996,125L176,496h160l19.004-115C391.996,351.996,416,306.996,416,256z M136,256 c0-66.001,54.004-120,120-120s120,53.999,120,120c0,65.996-54.004,120-120,120S136,321.996,136,256z' })
					)
				)
			)
		);
	}
});