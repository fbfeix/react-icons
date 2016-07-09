'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Forward = React.createClass({
	displayName: 'Forward',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M288,298.1v92.3L448,256L288,112v80C100.8,192,64,400,64,400C117,307,186.4,298.1,288,298.1z' })
			)
		);
	}
});