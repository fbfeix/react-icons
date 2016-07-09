'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var GearB = React.createClass({
	displayName: 'GearB',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M448,294.4v-76.8h-42.8c-3.4-14.4-8.9-28-16.1-40.5l29.8-29.7l-54.3-54.3l-29.1,29.1c-12.6-7.7-26.4-13.5-41.1-17.3V64 h-76.8v40.9c-14.7,3.8-28.5,9.7-41.1,17.3l-29.1-29.1l-54.3,54.3l29.8,29.7c-7.2,12.5-12.6,26.1-16.1,40.5H64v76.8h44.1 c3.8,13.7,9.5,26.6,16.7,38.6l-31.7,31.7l54.3,54.3l32.3-32.3c11.7,6.8,24.5,11.9,37.9,15.4v46h76.8v-46 c13.5-3.5,26.2-8.6,37.9-15.4l32.3,32.3l54.3-54.3L387.3,333c7.2-11.9,12.9-24.8,16.7-38.6H448z M256,309.8 c-29.7,0-53.7-24.1-53.7-53.8s24-53.8,53.7-53.8s53.8,24.1,53.8,53.8S285.7,309.8,256,309.8z' })
		);
	}
});