'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidVolumeUp = React.createClass({
	displayName: 'AndroidVolumeUp',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M64,192v128h85.334L256,431.543V80.458L149.334,192H64z M352,256c0-38.399-21.333-72.407-53.333-88.863v176.636 C330.667,328.408,352,294.4,352,256z M298.667,64v44.978C360.531,127.632,405.334,186.882,405.334,256 c0,69.119-44.803,128.369-106.667,147.022V448C384,428.254,448,349.257,448,256C448,162.744,384,83.746,298.667,64z' })
		);
	}
});