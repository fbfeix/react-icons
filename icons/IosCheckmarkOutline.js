'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosCheckmarkOutline = React.createClass({
	displayName: 'IosCheckmarkOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M340.1,177.3L215.3,303l-47.2-47.2l-17.8,17.8l56,56c2.5,2.5,5.9,4.5,8.9,4.5s6.3-2,8.8-4.4l133.7-134.4L340.1,177.3z' }),
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,446.7 c-105.1,0-190.7-85.5-190.7-190.7c0-105.1,85.5-190.7,190.7-190.7c105.1,0,190.7,85.5,190.7,190.7 C446.7,361.1,361.1,446.7,256,446.7z' })
				)
			)
		);
	}
});