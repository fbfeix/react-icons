'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosBrowsersOutline = React.createClass({
	displayName: 'IosBrowsersOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M64,144v304h303.9V144H64z M351.9,432H80V160h271.9V432z' }),
				React.createElement(
					'g',
					null,
					React.createElement('polygon', { points: '448,64 144,64 144,128 160,128 160,80 432,80 432,352 384,352 384,368 448,368 \t\t' })
				)
			)
		);
	}
});