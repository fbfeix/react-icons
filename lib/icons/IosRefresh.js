'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosRefresh = React.createClass({
	displayName: 'IosRefresh',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,384.1 c-70.7,0-128-57.3-128-128.1c0-70.8,57.3-128.1,128-128.1V84l96,64l-96,55.7v-55.8c-59.6,0-108.1,48.5-108.1,108.1 c0,59.6,48.5,108.1,108.1,108.1S364.1,316,364.1,256H384C384,327,326.7,384.1,256,384.1z' })
			)
		);
	}
});