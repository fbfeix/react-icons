'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var Levels = React.createClass({
	displayName: 'Levels',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M127,99.2V80c0-8.8-7.2-16-16-16s-16,7.2-16,16v21.5c-8.5,5.8-14,15.5-14,26.5s5.5,20.7,14,26.5V432c0,8.8,7.2,16,16,16 s16-7.2,16-16V156.8c10.7-5.2,18-16.1,18-28.8S137.7,104.4,127,99.2z' }),
				React.createElement('path', { d: 'M223,292.9V80c0-8.8-7.2-16-16-16s-16,7.2-16,16v211.7c-10.1,5.4-17,16-17,28.3s6.9,22.9,17,28.3V432c0,8.8,7.2,16,16,16 s16-7.2,16-16v-84.9c9-5.7,15-15.7,15-27.1S232,298.6,223,292.9z' }),
				React.createElement('path', { d: 'M319,163.3V80c0-8.8-7.2-16-16-16s-16,7.2-16,16v83.3c-9.6,5.5-16,15.9-16,27.7s6.4,22.2,16,27.7V432c0,8.8,7.2,16,16,16 s16-7.2,16-16V218.7c9.6-5.5,16-15.9,16-27.7S328.6,168.8,319,163.3z' }),
				React.createElement('path', { d: 'M431,383c0-11.8-6.4-22.2-16-27.7V80c0-8.8-7.2-16-16-16s-16,7.2-16,16v275.3c-9.6,5.5-16,15.9-16,27.7s6.4,22.2,16,27.7 V432c0,8.8,7.2,16,16,16s16-7.2,16-16v-21.3C424.6,405.2,431,394.8,431,383z' })
			)
		);
	}
});