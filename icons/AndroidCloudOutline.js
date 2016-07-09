'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidCloudOutline = React.createClass({
	displayName: 'AndroidCloudOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_9_' },
				React.createElement(
					'g',
					null,
					React.createElement(
						'g',
						null,
						React.createElement('path', { d: 'M403.001,217.001C388.997,148.002,328.998,96,256,96c-57.998,0-107.999,32.998-132.997,81 C63.002,183.002,16,233.998,16,296c0,65.996,54.004,120,120,120h260c55,0,100-45,100-100.001 C496,263.002,455.003,220,403.001,217.001z M396,376H136c-44.004,0-80-35.996-80-80c0-44,35.996-80,80-80h14.004 c12.998-46,55-80,105.996-80c60.996,0,110,49,110,110v10h30c32.998,0,60,27.003,60,60C456,348.998,428.998,376,396,376z' })
					)
				)
			)
		);
	}
});