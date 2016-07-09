'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var SocialDesignernews = React.createClass({
	displayName: 'SocialDesignernews',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement(
					'g',
					null,
					React.createElement('polygon', { points: '290.4,145 227,96 290.6,198.2 \t\t' })
				),
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M329,96v79.6V259h-36.4l-63.2-98.6l1.7,98.6H191V152l-37.3-29.3c1,1.2,2,2.4,2.9,3.7c10,13.9,15,30.5,15,50.5 c0,49.2-30.6,82.1-76.9,82.1H32v0.4L231.6,416H480V214.1L329,96z' })
				),
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M129.9,178.1c0-29-14.2-45.1-39.7-45.1H71v89h19C116,222,129.9,206.6,129.9,178.1z' })
				)
			)
		);
	}
});