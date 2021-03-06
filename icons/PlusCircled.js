'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var PlusCircled = React.createClass({
	displayName: 'PlusCircled',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M256,32C132.3,32,32,132.3,32,256s100.3,224,224,224s224-100.3,224-224S379.7,32,256,32z M384,272H272v112h-32V272H128v-32 h112V128h32v112h112V272z' })
			)
		);
	}
});