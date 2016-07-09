'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosCart = React.createClass({
	displayName: 'IosCart',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M160,400c-13.248,0-24,10.752-24,24s10.752,24,24,24s24-10.752,24-24S173.248,400,160,400z' }),
				React.createElement('path', { d: 'M384.5,400c-13.248,0-24,10.752-24,24s10.752,24,24,24s24-10.752,24-24S397.748,400,384.5,400z' }),
				React.createElement('path', { d: 'M448,128L123.177,95.646c-1.628-6.972-4.369-14.66-11.838-20.667C102.025,67.489,86.982,64,64,64v16.001 c18.614,0,31.167,2.506,37.312,7.447c4.458,3.585,5.644,8.423,7.165,15.989l-0.024,0.004l42.052,233.638 c2.413,14.422,7.194,25.209,13.291,32.986C171.043,379.312,180.533,384,192,384h240v-16H192c-4.727,0-19.136,0.123-25.749-33.755 l-5.429-30.16L432,256L448,128z' })
			)
		);
	}
});