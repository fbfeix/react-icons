'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosFlag = React.createClass({
	displayName: 'IosFlag',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M368,112c-11,1.4-24.9,3.5-39.7,3.5c-23.1,0-44-5.7-65.2-10.2c-21.5-4.6-43.7-9.3-67.2-9.3c-46.9,0-62.8,10.1-64.4,11.2 l-3.4,2.4v2.6v161.7V416h16V272.7c6-2.5,21.8-6.9,51.9-6.9c21.8,0,42.2,8.3,63.9,13c22,4.7,44.8,9.6,69.5,9.6 c14.7,0,27.7-2,38.7-3.3c6-0.7,11.3-1.4,16-2.2V126v-16.5C379.4,110.4,374,111.2,368,112z' })
			)
		);
	}
});