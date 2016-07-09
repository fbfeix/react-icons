'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosShuffle = React.createClass({
	displayName: 'IosShuffle',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M362.121,207.146L352,194.854L413.784,144h-46.117c-93.327,0-129.147,74.511-163.787,138.832 c-1.62,3.008-3.233,6.004-4.846,8.979c-19.836,36.607-40.979,61.242-64.64,75.314C120.573,375.346,101.401,384,64,384v-16.25 c47.937,0,83.098-13.673,120.966-83.561c1.606-2.965,3.214-5.949,4.827-8.944C224.943,209.977,264.784,128,367.667,128h46.28 L352,76.146L362.121,64L448,136L362.121,207.146z' }),
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M199.034,220.189c-19.836-36.607-40.979-61.242-64.64-75.314C120.573,136.654,101.401,128,64,128v16.25 c47.937,0,83.098,13.673,120.966,83.561c1.606,2.964,3.214,5.948,4.827,8.944c0.438,0.812,0.875,1.627,1.314,2.444 c3.01-5.438,6.107-10.917,9.339-16.394C199.977,221.935,199.504,221.056,199.034,220.189z' }),
					React.createElement('path', { d: 'M362.121,304.854L352,317.146L413.784,368h-46.117c-72.693,0-110.496-45.207-140.028-95.592 c-1.768,3.275-3.525,6.551-5.273,9.814c-1.175,2.192-2.344,4.37-3.513,6.545C249.621,338.777,291.254,384,367.667,384h46.28 L352,435.854L362.121,448L448,376L362.121,304.854z' })
				)
			)
		);
	}
});