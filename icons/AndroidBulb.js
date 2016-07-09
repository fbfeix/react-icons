'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidBulb = React.createClass({
	displayName: 'AndroidBulb',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_26_' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M256,170.136c25.499,0,49.567,10.025,67.771,28.229C341.975,216.568,352,240.637,352,266.136 c0,17.621-4.422,34.031-13.144,48.773c-8.339,14.098-20.437,26.036-34.985,34.526L288,358.697v18.376V448h-64v-70.927v-18.376 l-15.871-9.262C178.442,332.111,160,300.192,160,266.136c0-25.499,10.025-49.567,28.229-67.771 C206.433,180.161,230.501,170.136,256,170.136 M277.333,32c-6.396,0-42.666,0-42.666,0v64h42.666V32L277.333,32z M406.396,85.864 L368,124.271l29.864,29.865l38.406-38.396L406.396,85.864L406.396,85.864z M105.604,85.864l-29.875,29.875l38.406,38.396 L144,124.271L105.604,85.864L105.604,85.864z M256,138.136c-70.396,0-128,57.604-128,128c0,46.938,25.604,88.531,64,110.938V480 h128V377.073c38.396-22.406,64-62.938,64-110.938C384,195.739,326.396,138.136,256,138.136L256,138.136z M480,244.802h-64v42.667 h64V244.802L480,244.802z M96,244.802H32v42.667h64V244.802L96,244.802z' })
				)
			)
		);
	}
});