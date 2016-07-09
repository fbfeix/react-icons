'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidClose = React.createClass({
	displayName: 'AndroidClose',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_5_' },
				React.createElement(
					'g',
					null,
					React.createElement('polygon', { points: '405,136.798 375.202,107 256,226.202 136.798,107 107,136.798 226.202,256 107,375.202 136.798,405 256,285.798  375.202,405 405,375.202 285.798,256 \t\t' })
				)
			)
		);
	}
});