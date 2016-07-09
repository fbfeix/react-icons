'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosStopwatch = React.createClass({
	displayName: 'IosStopwatch',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M397.6,146.7l-1.8-1.7h18.4l8.5,7.8l22.5-22.8l-40.8-40.3L381.2,112l8.8,9.2v18.6l-5-4.7c-31.3-28.3-70-45.2-113-48.9V48 h-32v38h-2c-43.7,3-85,22.5-116,53v-17.8l8.9-9.2L108,89.8L67.2,130l22.5,22.8l8.5-7.8H116c-0.3,0-0.7,0.7-1,1.1 C82.2,181.2,64,227,64,274.6C64,379,150.1,464,256.1,464C361.9,464,448,379.1,448,274.7C448,227.1,430,181.6,397.6,146.7z M264,318.2l-8,17.8l-8-17.8c-14-3.5-24-15.8-24-30.5c0-13.8,11.5-26,24-30.3V128h16v129.3c13.5,3.7,24,15.9,24,30.4 C288,302.4,278,314.7,264,318.2z' })
			)
		);
	}
});