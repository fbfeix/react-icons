'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Flame = React.createClass({
	displayName: 'Flame',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M128.922,320c13.05,134,103.764,160,126.932,160c23.168,0,127.457-40.49,128.142-160c0.836-146-121.586-143-95.895-288 C201.427,96,118.289,210.816,128.922,320z M215.667,368c0-44.183,40.187-80,40.187-80s40.701,35.817,40.701,80 c0,44.184-40.701,80-40.701,80S215.667,412.184,215.667,368z' })
			)
		);
	}
});