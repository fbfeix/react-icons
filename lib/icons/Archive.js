'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var Archive = React.createClass({
	displayName: 'Archive',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '256,307.7 384,192 304,192 304,96 207.6,96 207.6,192 128,192 \t' }),
				React.createElement('path', { d: 'M465.4,297.2l-71.4-55h-42l62,61.8h-50.6c-2.3,0-4.3,1.2-5.4,2.9l-18.4,45.5H172.1l-18.4-45.5c-1-1.8-3.1-2.9-5.4-2.9H97.8 l62.2-61.8h-42.2l-71.4,55c-10.6,6.2-15.8,19-14.1,31.6l8.7,66.9c2.3,13.1,9.7,20.3,28.1,20.3h373.8c19.1,0,25.8-7.6,28.1-20.3 l8.7-66.9C481.4,315.9,476,303.4,465.4,297.2z' })
			)
		);
	}
});