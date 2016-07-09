'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var StatsBars = React.createClass({
	displayName: 'StatsBars',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('rect', { x: '176', y: '96', width: '64', height: '320' }),
				React.createElement('rect', { x: '80', y: '320', width: '64', height: '96' }),
				React.createElement('rect', { x: '272', y: '256', width: '64', height: '160' }),
				React.createElement('rect', { x: '368', y: '192', width: '64', height: '224' })
			)
		);
	}
});