'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Pricetag = React.createClass({
	displayName: 'Pricetag',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M471,261.4L471,261.4C471,261.4,471,261.4,471,261.4L260.9,49.8c0,0,0,0,0,0l-1.5-1.5c0,0-0.4,0-0.4,0 c-8.3-7.9-17.9-12-29.9-12.3v0l-99.7-3.7l-4.4-0.2c-11.2,0.2-22.2,4.5-30.7,13.1L45.1,94.3c-9,9-13.1,20.9-13.1,32.7c0,0,0,0,0,0.1 l0.3,4.2l6.7,97.3c0,0.1,0,0.2,0,0.2v1.9c0,0,0,0,0,0c1,8.7,4.5,17.3,10.4,24.4l5.5,5.4l206.3,208.8l3.1,3.1 c11.9,10.5,30,10,41.3-1.4l165.4-166.6C482.8,292.6,483,273.3,471,261.4z M144,192c-26.5,0-48-21.5-48-48s21.5-48,48-48 s48,21.5,48,48S170.5,192,144,192z' })
			)
		);
	}
});