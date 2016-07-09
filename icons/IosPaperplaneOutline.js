'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosPaperplaneOutline = React.createClass({
	displayName: 'IosPaperplaneOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M96,249.6l116.6,51.3L269.8,416L416,96L96,249.6z M228.1,296.5l155.7-166.2L269.2,379.2L228.1,296.5z M381.8,128.3 L216.8,285.4L134,249L381.8,128.3z' })
		);
	}
});