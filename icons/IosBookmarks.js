'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosBookmarks = React.createClass({
	displayName: 'IosBookmarks',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M342.9,165.4l9.1-6.4l9.1,6.4l22.9,14.5V64c-20.7,0-44.5,0-64,0v115.9L342.9,165.4z' }),
				React.createElement('path', { d: 'M432,64c0,0-13.3,0-32,0v146.5l-48-32l-48,32V64c-12.1,0-20.6,0-22.4,0c-8.1,0-17.6,7.2-17.6,15s0,329,0,329l-8,5.5l-8-5.5 c0,0,0-322,0-329s-9.2-15-17.6-15S80,64,80,64c-18.8,0-33,13.3-33,32v286.1c0,18.8,14.2,33.9,33,33.9c0,0,129.5,0,143.3,0 c13.8,0,24.7,4.2,24.7,19.4c0,9.1,0,12.6,0,12.6h8h8c0,0,0-3.4,0-12.6c0-15.3,10.9-19.4,24.7-19.4s143.3,0,143.3,0 c18.8,0,33-15.1,33-33.9V96C465,77.3,450.8,64,432,64z' })
			)
		);
	}
});