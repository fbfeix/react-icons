'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var AndroidTextsms = React.createClass({
	displayName: 'AndroidTextsms',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M408,64H96c-22.002,0-32,17.998-32,40v344l64-64h280c22.002,0,40-17.998,40-40V104C448,81.998,430.002,64,408,64z M198.4,242H160v-40h38.4V242z M275.2,242h-38.4v-40h38.4V242z M352,242h-38.4v-40H352V242z' })
			)
		);
	}
});