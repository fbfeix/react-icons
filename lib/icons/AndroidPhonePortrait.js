'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidPhonePortrait = React.createClass({
	displayName: 'AndroidPhonePortrait',

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
					React.createElement('path', { d: 'M358.856,32H153.143C130.512,32,112,50.326,112,72.728v366.545C112,461.674,130.512,480,153.143,480h205.713 C381.488,480,400,461.674,400,439.272V72.728C400,50.326,381.488,32,358.856,32z M364,400H148V112h216V400z' })
				)
			)
		);
	}
});