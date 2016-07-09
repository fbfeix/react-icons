'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosRedoOutline = React.createClass({
	displayName: 'IosRedoOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M64,400h10.3l19.2-31.2c20.5-32.7,44.9-62.8,75.8-76.6c24.4-10.9,46.7-18.9,86.7-20V352l192-128L256,96v80.3 c-63,2.8-108.1,20.7-143.3,56.2c-52.3,52.7-48.7,119-48.7,135.7C64.1,377.1,64,389.9,64,400z M272,192v-64.7l148.1,96.8L272,320.8 V256c-91,0-144.6,24.6-192.2,105.4C79.8,361.4,71,192,272,192z' })
			)
		);
	}
});