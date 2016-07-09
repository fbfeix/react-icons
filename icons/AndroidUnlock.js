'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidUnlock = React.createClass({
	displayName: 'AndroidUnlock',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M376,186h-20v-40c0-55-45-100-100-100S156,91,156,146h37.998c0-34.004,28.003-62.002,62.002-62.002 c34.004,0,62.002,27.998,62.002,62.002H318v40H136c-22.002,0-40,17.998-40,40v200c0,22.002,17.998,40,40,40h240 c22.002,0,40-17.998,40-40V226C416,203.998,398.002,186,376,186z M256,368c-22.002,0-40-17.998-40-40s17.998-40,40-40 s40,17.998,40,40S278.002,368,256,368z' })
		);
	}
});