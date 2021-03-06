'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosFilm = React.createClass({
	displayName: 'IosFilm',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M56,88v336h400V88H56z M128,408H72v-48h56V408z M128,344H72v-48h56V344z M128,280H72v-48h56V280z M128,216H72v-48h56V216z M128,152H72v-48h56V152z M368,264H144v-16h224V264z M440,408h-56v-48h56V408z M440,344h-56v-48h56V344z M440,280h-56v-48h56V280z M440,216h-56v-48h56V216z M440,152h-56v-48h56V152z' })
			)
		);
	}
});