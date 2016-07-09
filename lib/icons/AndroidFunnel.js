'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidFunnel = React.createClass({
	displayName: 'AndroidFunnel',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M208,400h96v-47.994h-96V400z M32,112v47.994h448V112H32z M112,280.783h288v-49.555H112V280.783z' })
		);
	}
});