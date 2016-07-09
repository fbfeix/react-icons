'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var AndroidFilm = React.createClass({
	displayName: 'AndroidFilm',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { fill: '#010101', d: 'M376,64v42.667h-40V64H176v42.667h-40V64H96v384h40v-42.666h40V448h160v-42.666h40V448h40V64H376z M176,362.667h-40V320h40V362.667z M176,277.334h-40v-42.667h40V277.334z M176,192h-40v-42.666h40V192z M376,362.667h-40V320h40 V362.667z M376,277.334h-40v-42.667h40V277.334z M376,192h-40v-42.666h40V192z' })
		);
	}
});