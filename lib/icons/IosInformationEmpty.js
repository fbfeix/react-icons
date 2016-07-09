'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosInformationEmpty = React.createClass({
	displayName: 'IosInformationEmpty',

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
					React.createElement('circle', { cx: '251.5', cy: '172', r: '20' }),
					React.createElement('polygon', { points: '272,344 272,216 224,216 224,224 240,224 240,344 224,344 224,352 288,352 288,344 \t\t' })
				)
			)
		);
	}
});