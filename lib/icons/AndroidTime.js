'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidTime = React.createClass({
	displayName: 'AndroidTime',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_1_' },
				React.createElement(
					'g',
					null,
					React.createElement(
						'g',
						null,
						React.createElement('path', { 'fill-opacity': '0.9', d: 'M256,43C137.789,43,43,138.851,43,256s94.789,213,213,213s213-95.851,213-213S373.149,43,256,43z M256,426.4c-93.718,0-170.4-76.683-170.4-170.4S162.282,85.6,256,85.6S426.4,162.282,426.4,256S349.718,426.4,256,426.4z' })
					),
					React.createElement('polygon', { 'fill-opacity': '0.9', points: '266.65,149.5 234.7,149.5 234.7,277.3 346.525,344.393 362.5,317.768 266.65,261.324 \t\t' })
				)
			)
		);
	}
});