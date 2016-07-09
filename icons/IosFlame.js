'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosFlame = React.createClass({
	displayName: 'IosFlame',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M223.899,32c25.691,145-96.732,142-95.895,288c0.686,119.51,104.975,160,128.143,160c23.166,0,113.88-26,126.931-160 C393.711,210.816,310.572,96,223.899,32z M256.147,472c0,0-40.701-35.816-40.701-80c0-44.183,40.555-80,40.555-80 s40.332,35.817,40.332,80C296.332,436.184,256.147,472,256.147,472z' })
			)
		);
	}
});