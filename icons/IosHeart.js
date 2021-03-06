'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosHeart = React.createClass({
	displayName: 'IosHeart',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M359.385,80C319.966,80,277.171,97.599,256,132.8C234.83,97.599,192.034,80,152.615,80C83.647,80,32,123.238,32,195.779 c0,31.288,12.562,71.924,40.923,105.657c28.359,33.735,45.229,51.7,100.153,88C228,425.738,256,432,256,432s28-6.262,82.924-42.564 c54.923-36.3,71.794-54.265,100.153-88C467.438,267.703,480,227.067,480,195.779C480,123.238,428.353,80,359.385,80z' })
		);
	}
});