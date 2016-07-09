'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosPricetag = React.createClass({
	displayName: 'IosPricetag',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('circle', { cx: '368', cy: '128', r: '16' }),
				React.createElement('path', { d: 'M304,32L48,320l160,160l256-288V32H304z M368,160c-17.645,0-32-14.355-32-32s14.355-32,32-32s32,14.355,32,32 S385.645,160,368,160z' })
			)
		);
	}
});