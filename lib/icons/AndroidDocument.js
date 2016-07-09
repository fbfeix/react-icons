'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidDocument = React.createClass({
	displayName: 'AndroidDocument',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M288,48H136c-22.092,0-40,17.908-40,40v336c0,22.092,17.908,40,40,40h240c22.092,0,40-17.908,40-40V176L288,48z M272,192 V80l112,112H272z' })
			)
		);
	}
});