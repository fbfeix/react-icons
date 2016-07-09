'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var Bookmark = React.createClass({
	displayName: 'Bookmark',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M344,64H168c-4.4,0-8,3.6-8,8v56h192V72C352,67.6,348.4,64,344,64z' }),
				React.createElement('polygon', { points: '160,448 256,352 352,448 352,144 160,144 \t' })
			)
		);
	}
});