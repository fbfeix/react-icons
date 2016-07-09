'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Navicon = React.createClass({
	displayName: 'Navicon',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('rect', { x: '96', y: '241', width: '320', height: '32' }),
				React.createElement('rect', { x: '96', y: '145', width: '320', height: '32' }),
				React.createElement('rect', { x: '96', y: '337', width: '320', height: '32' })
			)
		);
	}
});