'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosHome = React.createClass({
	displayName: 'IosHome',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M256,112L96,240v208h112V320h96v128h112V240L256,112z' }),
				React.createElement('path', { d: 'M256,64l-96,76.8V96H96v95.999l-32,25.499l11.51,11.384L256,84.49l180.49,144.393L448,217.498L256,64z' })
			)
		);
	}
});