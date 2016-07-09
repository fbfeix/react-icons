'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Icecream = React.createClass({
	displayName: 'Icecream',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '128,256 256,480 384,256 \t' }),
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M402.5,172.6c-0.8-0.4-1.5-0.8-2.3-1.3c-4.4-2.8-8.4-8.5-8.7-12.7l0.1-0.7c3.2-9,5-19.2,5-29.8c0-53.1-43-96.1-96.1-96.1 c-31.4,0-59.2,15-76.8,38.3c0,0-9.1,14-10.8,29c0,0,1.1-19.4,4.2-31.5c-7.4-2.5-15.4-3.8-23.6-3.8c-41.7,0-75.6,33.8-75.6,75.6 c0,6.4,0.8,12.6,2.3,18.5c0,0.4-0.1,0.7-0.2,1c-0.9,5.1-4,9.5-8.4,12.3c-0.7,0.5-1.5,0.9-2.2,1.3c-8.2,5-13.5,13.6-13.5,23.4 c0,15.4,13.5,28,29.9,28h4.1h252h4.1c16.4,0,29.8-12.5,29.8-28C416,186.3,410.6,177.6,402.5,172.6z' })
				)
			)
		);
	}
});