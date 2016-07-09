'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AlertCircled = React.createClass({
	displayName: 'AlertCircled',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M476.7,422.2L270.1,72.7c-2.9-5-8.3-8.7-14.1-8.7c-5.9,0-11.3,3.7-14.1,8.7L35.3,422.2c-2.8,5-4.8,13-1.9,17.9 c2.9,4.9,8.2,7.9,14,7.9h417.1c5.8,0,11.1-3,14-7.9C481.5,435.2,479.5,427.1,476.7,422.2z M288,400h-64v-48h64V400z M288,320h-64 V176h64V320z' })
			)
		);
	}
});