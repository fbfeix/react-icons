'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosCopy = React.createClass({
	displayName: 'IosCopy',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '144,416 144,400 144,112 112,112 112,448 352,448 352,416 160,416 \t' }),
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M325.3,64H160v48v288h192h48V139L325.3,64z M368,176h-80V96h16v64h64V176z' })
				)
			)
		);
	}
});