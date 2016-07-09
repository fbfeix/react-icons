'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidSubway = React.createClass({
	displayName: 'AndroidSubway',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M256,48c-93.864,0-176,10.668-176,85.334v213.332c0,41.604,33.062,74.666,74.667,74.666L128,448v16h256v-16l-26.667-26.668 c41.604,0,74.667-33.062,74.667-74.666V133.334C432,58.668,349.864,48,256,48z M160,384c-18.136,0-32-13.865-32-32 c0-18.137,13.864-32,32-32s32,13.863,32,32C192,370.135,178.136,384,160,384z M240,240H128v-96h112V240z M352,384 c-18.136,0-32-13.865-32-32c0-18.137,13.864-32,32-32s32,13.863,32,32C384,370.135,370.136,384,352,384z M384,240H272v-96h112V240z ' })
			)
		);
	}
});