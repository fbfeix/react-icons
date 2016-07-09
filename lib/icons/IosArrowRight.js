'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosArrowRight = React.createClass({
	displayName: 'IosArrowRight',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('polygon', { points: '160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 ' })
		);
	}
});