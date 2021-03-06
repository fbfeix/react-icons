'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidPhoneLandscape = React.createClass({
	displayName: 'AndroidPhoneLandscape',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_6_' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M480,358.856V153.143C480,130.512,461.674,112,439.272,112H72.728C50.326,112,32,130.512,32,153.143v205.713 C32,381.488,50.326,400,72.728,400h366.545C461.674,400,480,381.488,480,358.856z M112,364V148h288v216H112z' })
				)
			)
		);
	}
});