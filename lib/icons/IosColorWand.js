'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosColorWand = React.createClass({
	displayName: 'IosColorWand',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '198.011,159.22 163.968,193.337 420.064,450 454,415.883 \t' }),
				React.createElement('rect', { x: '182', y: '62', width: '32', height: '64' }),
				React.createElement('rect', { x: '182', y: '266', width: '32', height: '64' }),
				React.createElement('rect', { x: '274', y: '178', width: '64', height: '32' }),
				React.createElement('polygon', { points: '303.941,112.143 281.314,89.465 236.06,134.82 258.687,157.498 \t' }),
				React.createElement('polygon', { points: '92.06,112.143 137.314,157.498 159.941,134.82 114.687,89.465 \t' }),
				React.createElement('polygon', { points: '92.06,279.141 114.687,301.816 159.941,256.462 137.314,233.784 \t' }),
				React.createElement('rect', { x: '58', y: '178', width: '64', height: '32' })
			)
		);
	}
});