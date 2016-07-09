'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var InformationCircled = React.createClass({
	displayName: 'InformationCircled',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M480,253C478.3,129.3,376.7,30.4,253,32S30.4,135.3,32,259c1.7,123.7,103.3,222.6,227,221C382.7,478.3,481.7,376.7,480,253 z M256,111.9c17.7,0,32,14.3,32,32s-14.3,32-32,32c-17.7,0-32-14.3-32-32S238.3,111.9,256,111.9z M300,395h-88v-11h22V224h-22v-12 h66v172h22V395z' })
			)
		);
	}
});