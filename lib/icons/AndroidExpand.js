'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidExpand = React.createClass({
	displayName: 'AndroidExpand',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '396.795,396.8 320,396.8 320,448 448,448 448,320 396.795,320 \t' }),
				React.createElement('polygon', { points: '396.8,115.205 396.8,192 448,192 448,64 320,64 320,115.205 \t' }),
				React.createElement('polygon', { points: '115.205,115.2 192,115.2 192,64 64,64 64,192 115.205,192 \t' }),
				React.createElement('polygon', { points: '115.2,396.795 115.2,320 64,320 64,448 192,448 192,396.795 \t' })
			)
		);
	}
});