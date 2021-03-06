'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidRefresh = React.createClass({
	displayName: 'AndroidRefresh',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M256,388c-72.597,0-132-59.405-132-132c0-72.601,59.403-132,132-132c36.3,0,69.299,15.4,92.406,39.601L278,234h154V80 l-51.698,51.702C348.406,99.798,304.406,80,256,80c-96.797,0-176,79.203-176,176s78.094,176,176,176 c81.045,0,148.287-54.134,169.401-128H378.85C360.105,353.561,311.712,388,256,388z' })
			)
		);
	}
});