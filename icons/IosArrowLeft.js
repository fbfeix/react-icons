'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosArrowLeft = React.createClass({
	displayName: 'IosArrowLeft',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('polygon', { points: '352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 ' })
		);
	}
});