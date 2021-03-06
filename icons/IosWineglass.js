'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosWineglass = React.createClass({
	displayName: 'IosWineglass',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M264,308.988c0-21.975,20.458-38.674,40.247-54.824c7.907-6.453,15.37-12.547,21.519-18.962 C352.313,207.505,352,183.458,352,164.144V160c0-44.25-30.816-124.558-32.02-128H256h-64c-1.203,3.442-32,83.5-32,128v4.144 c0,19.273-0.323,43.361,26.225,71.059c6.148,6.415,13.617,12.509,21.523,18.962c19.789,16.15,40.252,32.85,40.252,54.824V464h-72v16 h80h80v-16h-72V308.988z M202.729,48H256h53.251c5.359,15.99,19.509,62.712,24.836,96H177.894 C183.221,110.712,197.37,63.99,202.729,48z' })
		);
	}
});