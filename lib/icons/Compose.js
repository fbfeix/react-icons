'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var Compose = React.createClass({
	displayName: 'Compose',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M442.8,99.6l-30.4-30.4c-7-6.9-18.2-6.9-25.1,0L355.5,101l55.5,55.5l31.8-31.7C449.7,117.7,449.7,106.5,442.8,99.6z' }),
				React.createElement(
					'g',
					null,
					React.createElement('polygon', { points: '346.1,110.5 174.1,288 160,352 224,337.9 400.6,164.9 \t\t' })
				),
				React.createElement('path', { d: 'M384,256v150c0,5.1-3.9,10.1-9.2,10.1s-269-0.1-269-0.1c-5.6,0-9.8-5.4-9.8-10s0-268,0-268c0-5,4.7-10,10.6-10H256l32-32 H87.4c-13,0-23.4,10.3-23.4,23.3v305.3c0,12.9,10.5,23.4,23.4,23.4h305.3c12.9,0,23.3-10.5,23.3-23.4V224L384,256z' })
			)
		);
	}
});