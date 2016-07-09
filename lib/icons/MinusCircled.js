'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var MinusCircled = React.createClass({
	displayName: 'MinusCircled',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M256,32C132.3,32,32,132.3,32,256s100.3,224,224,224s224-100.3,224-224S379.7,32,256,32z M384,272H128v-32h256V272z' })
			)
		);
	}
});