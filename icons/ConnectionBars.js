'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var ConnectionBars = React.createClass({
	displayName: 'ConnectionBars',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('rect', { x: '80', y: '352', width: '64', height: '64' }),
				React.createElement('rect', { x: '176', y: '288', width: '64', height: '128' }),
				React.createElement('rect', { x: '272', y: '192', width: '64', height: '224' }),
				React.createElement('rect', { x: '368', y: '96', width: '64', height: '320' })
			)
		);
	}
});