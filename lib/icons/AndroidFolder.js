'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidFolder = React.createClass({
	displayName: 'AndroidFolder',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_10_' },
				React.createElement(
					'g',
					null,
					React.createElement(
						'g',
						null,
						React.createElement('path', { d: 'M213.338,96H74.666C51.197,96,32,115.198,32,138.667v234.666C32,396.802,51.197,416,74.666,416h362.668 C460.803,416,480,396.802,480,373.333V186.667C480,163.198,460.803,144,437.334,144H256.006L213.338,96z' })
					)
				)
			)
		);
	}
});