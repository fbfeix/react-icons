'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosVideocamOutline = React.createClass({
	displayName: 'IosVideocamOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M303.7,128h-221C63.9,128,47,142.1,47,160.7v187.9c0,18.6,16.9,35.4,35.7,35.4h221c18.8,0,33.3-16.8,33.3-35.4V160.7 C337,142.1,322.5,128,303.7,128z M320,348.6c0,9.3-6.9,18.4-16.3,18.4h-221c-9.4,0-18.7-9.1-18.7-18.4V160.7 c0-9.3,9-15.5,18.4-15.5l221,0.1c9.4,0,16.6,6.1,16.6,15.4V348.6z' }),
				React.createElement('path', { d: 'M367,213v85.6l98,53.4V160L367,213z M448,190v132.3l-64-33.5v-65.6l64.1-33.6L448,190z' })
			)
		);
	}
});