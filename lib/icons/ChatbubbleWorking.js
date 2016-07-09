'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var ChatbubbleWorking = React.createClass({
	displayName: 'ChatbubbleWorking',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M256,449.4c28.9,0,56.4-5.7,81.3-15.9c0.6-0.3,1.1-0.5,1.7-0.7c0.1,0,0.2,0,0.2-0.1c3.5-1.3,7.3-2,11.2-2 c4.3,0,8.4,0.8,12.1,2.4l84,30.9l-22.1-88.4c0-5.3,1.5-10.3,3.9-14.6c0,0,0,0,0,0c0.8-1.3,1.6-2.6,2.5-3.7 c20.9-31.3,33-68.5,33-108.4C464,137.9,370.9,48,256,48C141.1,48,48,137.9,48,248.7C48,359.6,141.1,449.4,256,449.4z M352,224 c17.7,0,32,14.3,32,32c0,17.7-14.3,32-32,32c-17.7,0-32-14.3-32-32C320,238.3,334.3,224,352,224z M256,224c17.7,0,32,14.3,32,32 c0,17.7-14.3,32-32,32c-17.7,0-32-14.3-32-32C224,238.3,238.3,224,256,224z M160,224c17.7,0,32,14.3,32,32c0,17.7-14.3,32-32,32 c-17.7,0-32-14.3-32-32C128,238.3,142.3,224,160,224z' })
		);
	}
});