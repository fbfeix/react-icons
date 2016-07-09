'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Plane = React.createClass({
	displayName: 'Plane',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M281.7,311.9c0.4-6.9,8.3-4.5,8.3-4.5l62,12.6l128,48.7c0-24-3.8-26.5-9.4-30.7L288,207c0,0-4.9-60-4.9-112.9 c0-24.5-11.8-78.1-27.1-78.1s-27.1,54.4-27.1,78.1c0,50.2-4.9,112.9-4.9,112.9L41.4,338c-7.1,5-9.4,7.7-9.4,30.7L160,320l61.9-12.6 c0,0,7.9-2.4,8.3,4.5c0.4,6.9-1.2,69.1,5.9,102.1c0.9,4.4-2.5,4.7-4.8,7.4l-51.9,32.8c-1.7,1.9-2.5,7.3-2.5,7.3l-1,18.5l68-16l12,32 l12-32l68,16l-1-18.5c0.1,0-0.7-5.4-2.4-7.3l-51.9-32.8c-2.3-2.7-5.7-3-4.8-7.4C282.7,381,281.3,318.8,281.7,311.9z' })
		);
	}
});