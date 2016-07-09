'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosCamera = React.createClass({
	displayName: 'IosCamera',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M417.5,160h-61.7c-32.1-36-42.2-48-54.5-48h-88.5c-12.3,0-22.2,12-54.5,48H145v-16h-34v16H97.5C79.9,160,64,173.2,64,190.7 v176c0,17.5,15.9,33.3,33.5,33.3h320c17.6,0,30.5-15.8,30.5-33.3v-176C448,173.2,435.1,160,417.5,160z M256,360.5 c-47.1,0-85.5-38.4-85.5-85.5s38.4-85.5,85.5-85.5s85.5,38.4,85.5,85.5S303.1,360.5,256,360.5z M369,209h-17v-17h17V209z' }),
				React.createElement('path', { d: 'M256,205.5c-38.4,0-69.5,31.1-69.5,69.5s31.1,69.5,69.5,69.5s69.5-31.1,69.5-69.5S294.4,205.5,256,205.5z M256,307 c-17.7,0-32-14.3-32-32s14.3-32,32-32s32,14.3,32,32S273.7,307,256,307z' })
			)
		);
	}
});