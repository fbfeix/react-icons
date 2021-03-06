'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosInformationOutline = React.createClass({
	displayName: 'IosInformationOutline',

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
				),
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M256,48C141.1,48,48,141.1,48,256c0,114.9,93.1,208,208,208c114.9,0,208-93.1,208-208C464,141.1,370.9,48,256,48z M256,446.7c-105.1,0-190.7-85.5-190.7-190.7c0-105.1,85.5-190.7,190.7-190.7c105.1,0,190.7,85.5,190.7,190.7 C446.7,361.1,361.1,446.7,256,446.7z' })
				)
			)
		);
	}
});