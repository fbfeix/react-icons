'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosPricetagOutline = React.createClass({
	displayName: 'IosPricetagOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M464,32H304L48,320l160,160l256-288V32z M448,184L208.125,456L72.062,320L311.587,48H448V184z' }),
				React.createElement('path', { d: 'M368,160c17.645,0,32-14.355,32-32s-14.355-32-32-32s-32,14.355-32,32S350.355,160,368,160z M368,112 c8.836,0,16,7.163,16,16s-7.164,16-16,16s-16-7.163-16-16S359.164,112,368,112z' })
			)
		);
	}
});