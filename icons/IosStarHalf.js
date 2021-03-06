'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosStarHalf = React.createClass({
	displayName: 'IosStarHalf',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M172.248,304.931l-54.677,159.073L256,365.37l138.445,98.634L339.76,304.937L480,207H308.613L256,48.005L203.402,207H32 L172.248,304.931z M256,100.75L297,224h131l-108,74.711l42.623,122.481L256,345.257V100.75z' })
		);
	}
});