'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var More = React.createClass({
	displayName: 'More',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M113.7,304C86.2,304,64,282.6,64,256c0-26.5,22.2-48,49.7-48c27.6,0,49.8,21.5,49.8,48C163.5,282.6,141.3,304,113.7,304z' }),
				React.createElement('path', { d: 'M256,304c-27.5,0-49.8-21.4-49.8-48c0-26.5,22.3-48,49.8-48c27.5,0,49.7,21.5,49.7,48C305.7,282.6,283.5,304,256,304z' }),
				React.createElement('path', { d: 'M398.2,304c-27.5,0-49.8-21.4-49.8-48c0-26.5,22.2-48,49.8-48c27.5,0,49.8,21.5,49.8,48C448,282.6,425.8,304,398.2,304z' })
			)
		);
	}
});