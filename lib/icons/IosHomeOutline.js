'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosHomeOutline = React.createClass({
	displayName: 'IosHomeOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M256,112L96,240v208h112V320h96v128h112V240L256,112z M400,432h-80V304H192v128h-80V247.69l144-115.2l144,115.2V432z' }),
				React.createElement('path', { d: 'M256,64l-96,76.8V96H96v95.999l-32,25.499l11.51,11.384L256,84.49l180.49,144.393L448,217.498L256,64z M144,153.599 l-32,25.6V112h32V153.599z' })
			)
		);
	}
});