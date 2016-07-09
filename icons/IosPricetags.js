'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosPricetags = React.createClass({
	displayName: 'IosPricetags',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement(
					'g',
					null,
					React.createElement('polygon', { points: '464,64 464,201.377 227.153,467.48 240,480 480,208 480,64 \t\t' })
				),
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M288,32L32,320l160,160l23.471-23.904l11.348-11.375L448,192V80V64V32H288z M352,160c-17.645,0-32-14.355-32-32 s14.355-32,32-32s32,14.355,32,32S369.645,160,352,160z' }),
					React.createElement('circle', { cx: '352', cy: '128', r: '16' })
				)
			)
		);
	}
});