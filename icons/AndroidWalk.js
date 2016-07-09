'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidWalk = React.createClass({
	displayName: 'AndroidWalk',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M288,112c22.223,0,39.997-17.776,39.997-40c0-22.225-17.774-40-39.997-40s-40.003,17.775-40.003,40 C247.997,94.224,265.777,112,288,112z' }),
				React.createElement('path', { d: 'M288,232h104v-40h-72l-44.802-69.333c-7.698-11.667-18.136-18.136-30.933-18.136c-3.198,0-8.828,0.531-12.799,1.747 L120,144v112h40v-80l40.531-16L120,480h40l56.698-164.271L267,384v96h38V352l-57.031-96l19.745-61.864L288,232z' })
			)
		);
	}
});