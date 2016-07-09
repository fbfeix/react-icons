'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var AndroidDoneAll = React.createClass({
	displayName: 'AndroidDoneAll',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_4_' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M387.581,139.712L356.755,109L216.913,248.319l30.831,30.719L387.581,139.712z M481.172,109L247.744,340.469 l-91.39-91.051l-30.827,30.715L247.744,403L512,139.712L481.172,109z M0,280.133L123.321,403l30.829-30.713L31.934,249.418 L0,280.133z' })
				)
			)
		);
	}
});