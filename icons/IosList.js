'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosList = React.createClass({
	displayName: 'IosList',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M64,64v384h384V64H64z M144,368c-8.836,0-16-7.164-16-16s7.164-16,16-16s16,7.164,16,16S152.836,368,144,368z M144,272 c-8.836,0-16-7.164-16-16s7.164-16,16-16s16,7.164,16,16S152.836,272,144,272z M144,176c-8.836,0-16-7.164-16-16s7.164-16,16-16 s16,7.164,16,16S152.836,176,144,176z M384,360H192v-16h192V360z M384,264H192v-16h192V264z M384,168H192v-16h192V168z' })
			)
		);
	}
});