'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosMusicalNotes = React.createClass({
	displayName: 'IosMusicalNotes',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M416,319.9V78l-224,34.6v237.2c-9,0-20.9,0.4-43.5,1.3c-42.6,1.6-52.5,21.8-52.5,41.3c0,24.9,13.5,43.5,62.6,41.4 c52.8-2.3,50.3-49,50.3-82.5V189.8l191-32v160.6c-9,0-19.9,0.4-42.6,1.3c-42.6,1.6-52.5,21.8-52.5,41.3c0,24.9,13,43.5,62.2,41.4 C420,400.1,416,353.4,416,319.9z' })
		);
	}
});