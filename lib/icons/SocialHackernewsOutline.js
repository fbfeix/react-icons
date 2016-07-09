'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var SocialHackernewsOutline = React.createClass({
	displayName: 'SocialHackernewsOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M416,96v320H96V96H416 M448,64H64v384h384V64L448,64z' }),
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M296.7,159H342l-63.9,120v72h-39.9v-72L172,159h47.1l39.7,83.6L296.7,159z' })
				)
			)
		);
	}
});