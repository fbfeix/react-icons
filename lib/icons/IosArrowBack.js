'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosArrowBack = React.createClass({
	displayName: 'IosArrowBack',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('polygon', { points: '352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 ' })
		);
	}
});