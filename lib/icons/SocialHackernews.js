'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var SocialHackernews = React.createClass({
	displayName: 'SocialHackernews',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M64,64v384h384V64H64z M278,279v72h-40v-72l-66-120h47.1l39.7,83.6l38-83.6H342L278,279z' })
			)
		);
	}
});