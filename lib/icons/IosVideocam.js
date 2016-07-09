'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosVideocam = React.createClass({
	displayName: 'IosVideocam',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M303.7,128h-221C63.9,128,47,142.1,47,160.7v187.9c0,18.6,16.9,35.4,35.7,35.4h221c18.8,0,33.3-16.8,33.3-35.4V160.7 C337,142.1,322.5,128,303.7,128z' }),
				React.createElement('path', { d: 'M367,213v85.6l98,53.4V160L367,213z' })
			)
		);
	}
});