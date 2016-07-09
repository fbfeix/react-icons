'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosPause = React.createClass({
	displayName: 'IosPause',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('rect', { x: '128', y: '96', width: '79', height: '320' }),
				React.createElement('rect', { x: '305', y: '96', width: '79', height: '320' })
			)
		);
	}
});