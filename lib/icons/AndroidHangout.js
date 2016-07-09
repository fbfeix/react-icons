'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var AndroidHangout = React.createClass({
	displayName: 'AndroidHangout',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M256,48c-97.321,0-176,77.114-176,172.487c0,95.38,78.679,172.487,176,172.487V464c100.425-47.689,176-152.195,176-243.513 C432,125.114,353.321,48,256,48z M246,230.633L224.943,271H193.88l20.712-40H184v-61h62V230.633z M328,230.633L307.768,271h-31.063 l20.704-40H266v-61h62V230.633z' })
		);
	}
});