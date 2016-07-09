'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosColorWandOutline = React.createClass({
	displayName: 'IosColorWandOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M192.011,149.661l-34.043,34.041l256.097,256.096L448,405.757L192.011,149.661z M212.596,215.702l11.415-11.414 l201.468,201.469l-11.414,11.414L212.596,215.702z' }),
				React.createElement('rect', { x: '184', y: '64', width: '16', height: '40' }),
				React.createElement('rect', { x: '184', y: '268', width: '16', height: '40' }),
				React.createElement('rect', { x: '280', y: '176', width: '40', height: '16' }),
				React.createElement('rect', { x: '64', y: '176', width: '40', height: '16' }),
				React.createElement('rect', { x: '111.875', y: '94.077', transform: 'matrix(-0.7071 0.7071 -0.7071 -0.7071 285.3039 109.9734)', width: '16', height: '40' }),
				React.createElement('rect', { x: '111.877', y: '238.327', transform: 'matrix(-0.7071 -0.7071 0.7071 -0.7071 21.9762 525.7571)', width: '15.998', height: '40' }),
				React.createElement('rect', { x: '256.126', y: '94.077', transform: 'matrix(-0.7071 -0.7071 0.7071 -0.7071 370.226 381.506)', width: '16', height: '39.999' })
			)
		);
	}
});