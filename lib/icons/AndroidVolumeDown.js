'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidVolumeDown = React.createClass({
	displayName: 'AndroidVolumeDown',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M64,192v128h85.334L256,431.543V80.458L149.334,192H64z M352,256c0-38.399-21.333-72.407-53.333-88.863v176.636 C330.667,328.408,352,294.4,352,256z' })
		);
	}
});