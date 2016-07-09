'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosListOutline = React.createClass({
	displayName: 'IosListOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M432,80v352H80V80H432 M448,64H64v384h384V64L448,64z' }),
					React.createElement(
						'g',
						null,
						React.createElement('rect', { x: '192', y: '152', width: '192', height: '16' })
					),
					React.createElement(
						'g',
						null,
						React.createElement('rect', { x: '192', y: '248', width: '192', height: '16' })
					),
					React.createElement(
						'g',
						null,
						React.createElement('rect', { x: '192', y: '344', width: '192', height: '16' })
					)
				),
				React.createElement('circle', { cx: '144', cy: '160', r: '16' }),
				React.createElement('circle', { cx: '144', cy: '256', r: '16' }),
				React.createElement('circle', { cx: '144', cy: '352', r: '16' })
			)
		);
	}
});