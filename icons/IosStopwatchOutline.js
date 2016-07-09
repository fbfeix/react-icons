'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosStopwatchOutline = React.createClass({
	displayName: 'IosStopwatchOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M397.6,146.7l-1.8-1.7h18.4l8.5,7.8l22.5-22.8l-40.8-40.3L381.2,112l8.8,9.2v18.6l-5-4.7c-31.3-28.3-70-45.2-113-48.9V48 h-32v38h-2c-43.7,3-85,22.5-116,53v-17.8l8.9-9.2L108,89.8L67.2,130l22.5,22.8l8.5-7.8H116c-0.3,0-0.7,0.7-1,1.1 C82.2,181.2,64,227,64,274.6C64,379,150.1,464,256.1,464C361.9,464,448,379.1,448,274.7C448,227.1,430,181.6,397.6,146.7z M256.3,445.7c-95.5,0-173.1-76.7-173.1-170.9c0-94.3,77.7-170.9,173.1-170.9c95.5,0,173.1,76.7,173.1,170.9 C429.5,369,351.8,445.7,256.3,445.7z' }),
				React.createElement('path', { d: 'M264,257.3V128h-16v129.4c-12.5,4.3-24,16.5-24,30.3c0,14.7,10,27,24,30.5l8,17.8l0,0l8-17.8c14-3.5,24-15.8,24-30.5 C288,273.2,277.5,261,264,257.3z' })
			)
		);
	}
});