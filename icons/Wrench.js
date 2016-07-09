'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Wrench = React.createClass({
	displayName: 'Wrench',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M461.9,114.9l-56.5,56.7l-55.1-10l-9.9-55.1l56.5-56.7c-12.7-12.7-30.8-18.5-44.2-17.8c-13.5,0.7-42.3,8.3-64.6,32 c-21.6,22.8-44.3,65.3-24.2,112.5c2.4,5.7,5.1,13.2-2.9,21.2c-8.1,8-215,202.8-215,202.8c-19.4,16.7-18,47.6-0.1,65.6 c18.2,17.9,48.9,19,65.6-0.3c0,0,193.2-205.8,202.7-215.1c8.5-8.3,16.1-5.5,21.2-2.9c35.6,18.4,86.3,2.4,112.6-23.9 c26.3-26.3,31.1-51.7,31.9-64.7C480.7,146.3,476.2,129.2,461.9,114.9z M91.3,443.2c-6.3,6.2-16.5,6.2-22.7,0 c-6.2-6.3-6.2-16.5,0-22.7c6.3-6.2,16.5-6.2,22.7,0C97.5,426.8,97.5,437,91.3,443.2z' })
		);
	}
});