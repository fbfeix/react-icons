'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosMore = React.createClass({
	displayName: 'IosMore',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M256,224c-17.7,0-32,14.3-32,32s14.3,32,32,32c17.7,0,32-14.3,32-32S273.7,224,256,224L256,224z' }),
				React.createElement('path', { d: 'M128.4,224c-17.7,0-32,14.3-32,32s14.3,32,32,32c17.7,0,32-14.3,32-32S146,224,128.4,224L128.4,224z' }),
				React.createElement('path', { d: 'M384,224c-17.7,0-32,14.3-32,32s14.3,32,32,32s32-14.3,32-32S401.7,224,384,224L384,224z' })
			)
		);
	}
});