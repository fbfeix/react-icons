'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var SocialGoogleplus = React.createClass({
	displayName: 'SocialGoogleplus',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M242.1,275.6l-18.2-13.7l-0.1-0.1c-5.8-4.6-10-8.3-10-14.7c0-7,5-11.8,10.9-17.4l0.5-0.4c20-15.2,44.7-34.3,44.7-74.6 c0-26.9-11.9-44.7-23.3-57.7h13L320,64H186.5c-25.3,0-62.7,3.2-94.6,28.6l-0.1,0.3C70,110.9,57,137.4,57,163.5 c0,21.2,8.7,42.2,23.9,57.4c21.4,21.6,48.3,26.1,67.1,26.1c1.5,0,3,0,4.5-0.1c-0.8,3-1.2,6.3-1.2,10.3c0,10.9,3.6,19.3,8.1,26.2 c-24,1.9-58.1,6.5-84.9,22.3C35.1,328.4,32,361.7,32,371.3c0,38.2,35.7,76.8,115.5,76.8c91.6,0,139.5-49.8,139.5-99 C287,312,264.2,293.5,242.1,275.6z M116.7,139.9c0-13.4,3-23.5,9.3-30.9c6.5-7.9,18.2-13.1,29-13.1c19.9,0,32.9,15,40.4,27.6 c9.2,15.5,14.9,36.1,14.9,53.6c0,4.9,0,20-10.2,29.8c-7,6.7-18.7,11.4-28.6,11.4c-20.5,0-33.5-14.7-40.7-27 C120.4,173.5,116.7,153.1,116.7,139.9z M237.8,368c0,27.4-25.2,44.5-65.8,44.5c-48.1,0-80.3-20.6-80.3-51.3 c0-26.1,21.5-36.8,37.8-42.5c18.9-6.1,44.3-7.3,50.1-7.3c3.9,0,6.1,0,8.7,0.2C224.9,336.8,237.8,347.7,237.8,368z' }),
				React.createElement('polygon', { points: '402,142 402,64 368,64 368,142 288,142 288,176 368,176 368,257 402,257 402,176 480,176 480,142 \t' })
			)
		);
	}
});