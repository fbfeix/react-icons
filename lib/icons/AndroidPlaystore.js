'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidPlaystore = React.createClass({
	displayName: 'AndroidPlaystore',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M464,152H360c0-57-46.562-103.859-104-103.859C198.562,48.141,152,95,152,152H48C66.688,368,61,464,61,464h389.999 C450.998,464,445.311,366,464,152z M256,74.105c43.008,0,77.999,34.895,77.999,77.895H178C178,109,212.991,74.105,256,74.105z M204,397.64V228.867l142.999,84.387L204,397.64z' })
			)
		);
	}
});