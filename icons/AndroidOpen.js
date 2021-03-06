'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidOpen = React.createClass({
	displayName: 'AndroidOpen',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M405.34,405.332H106.66V106.668H240V64H106.66C83.191,64,64,83.197,64,106.668v298.664C64,428.803,83.191,448,106.66,448 h298.68c23.469,0,42.66-19.197,42.66-42.668V272h-42.66V405.332z M288,64v42.668h87.474L159.999,322.133l29.866,29.866 l215.476-215.47V224H448V64H288z' })
		);
	}
});