'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var SocialDropboxOutline = React.createClass({
	displayName: 'SocialDropboxOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M177,77.1L64,151l78.3,63L256,143.2L177,77.1z M91.4,153.3l84.5-56.8l52.9,46L143.4,195L91.4,153.3z' }),
				React.createElement('path', { d: 'M369.8,213L256,284.1l79,66.1l19-12.6v20.2L256,417l-98-58.5V338l19,12.2l79-66.1L142.2,213L64,276.3l78,51.5v39.4 l114,67.8l114-68.5v-39.2l78-51.2L369.8,213z M143.4,230.9l85.4,55.4l-52.9,44.1l-84.5-55.8L143.4,230.9z M283.2,286.3l85.4-55.4 l52.1,43.6l-84.5,55.8L283.2,286.3z' }),
				React.createElement('path', { d: 'M448,151L335,77.1l-79,66.1l113.8,70.8L448,151z M283.2,142.6l52.9-46l84.5,56.8L368.6,195L283.2,142.6z' })
			)
		);
	}
});