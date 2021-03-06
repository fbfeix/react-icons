'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Pinpoint = React.createClass({
	displayName: 'Pinpoint',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M256,32C132.3,32,32,132.3,32,256c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,132.3,379.7,32,256,32z M391.8,391.8c-32.5,32.5-74.6,51.9-119.8,55.6L264,384h-16l-7.9,63.3c-45.3-3.7-87.4-23.1-119.8-55.6 c-32.5-32.5-51.9-74.6-55.6-119.8L128,264v-16l-63.3-7.9c3.7-45.3,23.1-87.4,55.6-119.8c32.5-32.5,74.6-51.9,119.8-55.6L248,128h16 l7.9-63.3c45.3,3.7,87.4,23.1,119.8,55.6c32.5,32.5,51.9,74.6,55.6,119.8L384,248v16l63.3,7.9C443.6,317.2,424.2,359.3,391.8,391.8z ' })
		);
	}
});