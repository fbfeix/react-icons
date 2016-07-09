'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Monitor = React.createClass({
	displayName: 'Monitor',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M468.7,64H43.3c-6,0-11.3,5-11.3,11.1v265.7c0,6.2,5.2,11.1,11.3,11.1h425.4c6,0,11.3-5,11.3-11.1V75.1 C480,69,474.8,64,468.7,64z M448,320H64V96h384V320z' }),
				React.createElement('path', { d: 'M302.5,448c28-0.5,41.5-3.9,29-12.5c-12.5-8.7-28.5-15.3-29-22.5c-0.3-3.7-1.7-45-1.7-45H256h-44.8c0,0-1.5,41.3-1.7,45 c-0.5,7.1-16.5,13.8-29,22.5c-12.5,8.7,1,12,29,12.5H302.5z' })
			)
		);
	}
});