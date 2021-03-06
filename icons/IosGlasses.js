'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosGlasses = React.createClass({
	displayName: 'IosGlasses',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M465.4,247c-2.2-22-12.4-43-28.9-58.4c-17.1-15.9-39.3-24.7-62.7-24.7c-41.5,0-77.3,27.4-88.5,67c-7-7-18.5-11.7-29.3-11.7 c-10.8,0-22.3,4.7-29.3,11.7c-11.2-39.6-47-67-88.5-67c-23.3,0-45.6,8.7-62.7,24.6C59,204,48.8,225,46.6,247H32v18h14.6 c2.2,22,12.4,43,28.9,58.4c17.1,15.9,39.3,24.7,62.7,24.7c50.8,0,92.1-41.2,92.1-92c0-0.1,0-0.1,0-0.1h0c0-9.9,11.5-21.6,25.7-21.6 s25.7,11.7,25.7,21.6h0c0,0,0,0,0,0.1c0,50.8,41.3,92,92.1,92c23.3,0,45.6-8.7,62.7-24.7c16.5-15.4,26.7-36.5,28.9-58.5H480v-18 H465.4z' })
		);
	}
});