'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var Edit = React.createClass({
	displayName: 'Edit',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('rect', { x: '178.846', y: '92.087', transform: 'matrix(-0.7071 -0.7071 0.7071 -0.7071 224.3476 631.1498)', width: '128.085', height: '354.049' }),
				React.createElement('path', { d: 'M471.723,88.393l-48.115-48.114c-11.723-11.724-31.558-10.896-44.304,1.85l-45.202,45.203l90.569,90.568l45.202-45.202 C482.616,119.952,483.445,100.116,471.723,88.393z' }),
				React.createElement('polygon', { points: '64.021,363.252 32,480 148.737,447.979 \t' })
			)
		);
	}
});