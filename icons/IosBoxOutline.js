'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosBoxOutline = React.createClass({
	displayName: 'IosBoxOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M287.8,240c8.8,0,16.1,7.2,16.1,16s-7,16-15.9,16h-64c-8.8,0-16-7.2-16-16s7.2-16,16-16h63 M288,224h-64 c-17.6,0-32,14.4-32,32s14.4,32,32,32h64c17.6,0,32-14.4,32-32S305.6,224,288,224L288,224z' }),
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M416,112H96v80h16v208h288V192h16V112z M384,384H128V192h256V384z M400,176H112v-48h288V176z' })
				)
			)
		);
	}
});