'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosMusicalNote = React.createClass({
	displayName: 'IosMusicalNote',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M352.1,102.3c0-0.1,0-0.2,0-0.2c-0.1-0.3-0.1-0.5-0.2-0.8c0,0,0-0.1,0-0.1c-0.6-1.5-1.8-3-3.5-3.4l-2-0.4L256,78v272.6 c-8,0-22.4,0.4-44.5,1.3c-41.8,1.6-51.4,21.6-51.4,40.9c0,24.6,13.2,43.1,61.5,41c51.8-2.3,51.4-48.5,51.4-81.7V159.6l73.6,13.5l0,0 c3,0.6,5.4-2.3,5.4-5.3v-64.4C352,103,352.1,102.6,352.1,102.3z' })
		);
	}
});